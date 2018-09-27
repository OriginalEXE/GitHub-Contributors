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
        class="SelectableList-itemsItemLink js-selectable-list-items-item-link"
        >
          <div
          v-if="item.thumb"
          :style="{
            'background-image': `url(${item.thumb})`,
          }"
          class="SelectableList-itemsItemThumb"
          />
          {{ item.label }}
        </nuxt-link>
        <a
        v-else
        class="SelectableList-itemsItemLink"
        href="#"
        @click.prevent="$emit ('selectedItem', item.label)"
        >
          <div
          v-if="item.thumb"
          :style="{
            'background-image': `url(${item.thumb})`,
          }"
          class="SelectableList-itemsItemThumb"
          />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.SelectableList-items {
  border: rem-calc(2) solid #efefef;
  border-radius: rem-calc(3);
  list-style: none;
  margin: 0;
  padding: 0;
}

.SelectableList-itemsItem:not(:last-child) {
  border-bottom: rem-calc(1) solid #efefef;
}

.SelectableList-itemsItemLink {
  align-items: center;
  color: $secondary-color;
  display: flex;
  padding: rem-calc(10);
  text-decoration: none;
}

.SelectableList-itemsItemThumb {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: rem-calc(3);
  height: rem-calc(32);
  margin-right: rem-calc(15);
  width: rem-calc(32);
}
</style>
