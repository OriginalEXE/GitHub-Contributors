<template>
  <main class="Page">
    <div class="Page-container">
      <slot/>
    </div>
  </main>
</template>

<style lang="scss">
.Page {
  min-height: 100vh;
  padding: rem-calc(30) rem-calc(15);
  transition: opacity 150ms;
}

.Page-container {
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(640);
}

.Page p {
  font-size: rem-calc(16);
  line-height: 1.5;
  margin-bottom: rem-calc(16);
  margin-top: 0;
}
</style>
