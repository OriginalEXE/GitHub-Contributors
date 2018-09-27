<template>
  <h1 class="Page-title">
    <slot/>
  </h1>
</template>

<style lang="scss">
.Page-title {
  color: $secondary-color;
  font-size: rem-calc(36);
  line-height: 1.25;
  margin-bottom: rem-calc(18);
  margin-top: 0;
  text-align: center;
}
</style>
