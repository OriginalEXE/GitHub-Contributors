<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return [];
      },
    },
    internalLinks: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="SelectableList">
    <ul
    v-if="items.length"
    class="SelectableList-items"
    >
      <li
      v-for="(item, i) in items"
      :key="i"
      class="SelectableList-itemsItem"
      >
        <nuxt-link
        v-if="internalLinks"
        :to="item.url"
        class="SelectableList-items"
        >
          {{ item.label }}
        </nuxt-link>
        <a
        v-else
        href="#"
        @click.prevent="$emit ('selectedItem', item.label)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
