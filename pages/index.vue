<script>
import BaseButton from '~/components/BaseButton.vue';
import BasePage from '~/components/BasePage.vue';
import BasePageTitle from '~/components/BasePageTitle.vue';

export default {
  components: {
    BaseButton,
    BasePage,
    BasePageTitle,
  },
};
</script>

<template>
  <BasePage class="IndexPage">
    <header>
      <BasePageTitle>GitHub Contributors</BasePageTitle>
    </header>
    <div class="IndexPage-intro">
      <p>
        Search for GitHub users and their repositories.
        Get contribution analysis on a per-user basis.
      </p>
      <p>
        <BaseButton to="/search">
          Get Started
        </BaseButton>
      </p>
    </div>
  </BasePage>
</template>

<style lang="scss">
.IndexPage {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
}

.IndexPage-intro {
  max-width: rem-calc(320);
  text-align: center;
}
</style>
