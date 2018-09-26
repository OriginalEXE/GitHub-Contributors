<template>
  <main class="Page">
    <slot/>
  </main>
</template>

<style lang="scss">
.Page {
  font-family: 'Source Sans Pro', sans-serif;
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(1100);
  padding: rem-calc(30) rem-calc(15);
}

.Page p {
  font-size: rem-calc(16);
  line-height: 1.5;
  margin-bottom: rem-calc(16);
  margin-top: rem-calc(16);
}
</style>
