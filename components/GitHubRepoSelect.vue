<script>
import GitHubRepoSelectLogic from '~/components/GitHubRepoSelectLogic.vue';
import SelectableList from '~/components/SelectableList.vue';

export default {
  components: {
    GitHubRepoSelectLogic,
    SelectableList,
  },
  data () {
    return {
      searchQuery: '',
    };
  },
  methods: {
    setSearchQuery (searchQuery) {
      this.searchQuery = searchQuery;
    },
  },
};
</script>

<template>
  <GitHubRepoSelectLogic
  :search-query="searchQuery"
  @setSearchQuery="setSearchQuery"
  >
    <div
    slot-scope="{
      username,
      users,
      setUsername,
      status,
      repo,
      repos,
    }"
    class="GitHubRepoSelect"
    >
      <form class="GitHubRepoSelect-form">
        <label class="GitHubRepoSelect-formField">
          <div class="GitHubRepoSelect-formLabel">
            Enter a GitHub username:
          </div>
          <input
          v-model="searchQuery"
          class="GitHubRepoSelect-formInput"
          type="text"
          >
        </label>

        <template v-if="!username">
          <p v-if="status === 'idle' && searchQuery && !users.length">
            No users found
          </p>

          <SelectableList
          v-else-if="!username && searchQuery"
          :items="users"
          @selectedItem="setUsername"
          />
        </template>
        <template v-else>
          <p v-if="!repo">
            Now select a repository:
          </p>
          <p v-if="status=== 'searchingRepos'">
            Searching for users repositories...
          </p>
          <SelectableList
          v-else-if="repos.length"
          :internal-links="true"
          :items="repos"
          />
          <p v-else-if="status === 'idle' && !repos.length">
            No repositories found for this user
          </p>
        </template>
      </form>
    </div>
  </GitHubRepoSelectLogic>
</template>

<style lang="scss">
.GitHubRepoSelect-formField {
  display: block;
  margin-bottom: rem-calc(15);
}

.GitHubRepoSelect-formLabel {
  font-weight: 700;
  margin-bottom: rem-calc(10);
}

.GitHubRepoSelect-formInput {
  appearance: none;
  background-color: #fff;
  border: rem-calc(2) solid $secondary-color;
  border-radius: rem-calc(3);
  box-shadow: none;
  padding: rem-calc(5);
  width: 100%;
}
</style>
