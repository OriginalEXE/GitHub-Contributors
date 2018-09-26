<script>
import BasePage from '~/components/BasePage.vue';
import BasePageTitle from '~/components/BasePageTitle.vue';

export default {
  components: {
    BasePage,
    BasePageTitle,
  },
};
</script>


<template>
  <BasePage class="IndexPage">
    <BasePageTitle>GitHub Contributors</BasePageTitle>
    <div class="IndexPage-intro">
      <p>
        Search for GitHub users and their repositories below.
        Select one to get contribution analysis on a per-user basis.
      </p>
    </div>
  </BasePage>
</template>

<style lang="scss">
.IndexPage-intro {
  text-align: center;
}
</style>
