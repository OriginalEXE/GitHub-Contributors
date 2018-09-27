<script>
import BaseButton from '~/components/BaseButton.vue';
import BasePage from '~/components/BasePage.vue';
import BasePageTitle from '~/components/BasePageTitle.vue';
import GitHubRepoSelect from '~/components/GitHubRepoSelect.vue';

export default {
  components: {
    BaseButton,
    BasePage,
    BasePageTitle,
    GitHubRepoSelect,
  },
};
</script>


<template>
  <BasePage class="SearchPage">
    <header>
      <BasePageTitle>Repository Search</BasePageTitle>
    </header>
    <GitHubRepoSelect/>
  </BasePage>
</template>

<style lang="scss">
.SearchPage-intro {
  text-align: center;
}
</style>
