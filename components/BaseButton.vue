<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
};
</script>

<template>
  <nuxt-link
  :to="to"
  class="Button"
  >
    <slot/>
  </nuxt-link>
</template>

<style lang="scss">
.Button {
  appearance: none;
  background-color: $primary-color;
  border: 0;
  border-radius: rem-calc(3);
  color: #fff;
  display: inline-block;
  font-weight: 700;
  padding: rem-calc(10) rem-calc(20);
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: lighten($primary-color, 5);
  }
}
</style>
