<script>
import BasePage from '~/components/BasePage.vue';
import BasePageTitle from '~/components/BasePageTitle.vue';
import SelectableList from '~/components/SelectableList.vue';
import { searchRepos as searchGitHubRepos } from '~/utils/github';

export default {
  components: {
    BasePage,
    BasePageTitle,
    SelectableList,
  },
  validate ({ params: { username = '' }, redirect }) {
    if (!username) {
      return redirect ('/search');
    }

    return true;
  },
  asyncData ({ params: { username = '', repo = '' } = {}, error }) {
    if (repo) {
      return {};
    }

    return searchGitHubRepos ({
      username,
    })
      .promise ()
      .then (
        ({ data, status }) => {
          if (status === 404) {
            return error ({ statusCode: 404, message: 'Could not find this user' });
          }

          if (status !== 200) {
            return error ({ statusCode: status, message: 'Could not load data for this user' });
          }

          return {
            repos: data.map (
              item => ({
                label: item.name,
                url: `/user/${item.full_name}`,
              })
            ),
          };
        }
      )
      .catch (() => {
        error ({ statusCode: 503, message: 'Could not load data for this user' });
      });
  },
};
</script>

<template>
  <BasePage class="IndexPage">
    <template v-if="!this.$route.params.repo">
      <BasePageTitle>{{ this.$route.params.username }}'s repos</BasePageTitle>
      <p v-if="!repos.length">
        No repositories found for this user
      </p>
      <template v-else>
        <p>
          Select one of the repos below:
        </p>
        <SelectableList
        :internal-links="true"
        :items="repos"
        />
      </template>
    </template>
    <template v-else>
      <BasePageTitle>
        {{ this.$route.params.username }} / {{ this.$route.params.repo }}
      </BasePageTitle>
      <nuxt-child/>
    </template>
  </BasePage>
</template>
