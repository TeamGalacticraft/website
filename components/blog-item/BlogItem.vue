<template>
  <div class="blog">
    <div class="d-flex flex-align-center flex-justify-between w-100">
      <div class="blog-title">
        <h3 class="m-0 text-24 text-ellipsis">{{ blog.title }}</h3>
        <p class="m-0 text-primary text-12">{{ formatDate(blog.date) }}</p>
      </div>

      <img src="../../assets/rocket.png" alt="" />
    </div>

    <p class="mt-5 text-12">{{ blog.desc }}</p>
  </div>

  <hr v-if="!lastItem" class="w-90 bg-secondary" style="opacity: 0.2" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BlogItem } from "./types/blogItem.types";
import { isMobile } from "@/composables/mediaQueries";
import { formatDate } from "@/composables/time";

export default defineComponent({
  name: "BlogItem",
  props: {
    blog: {
      type: Object as PropType<BlogItem>,
      default: () => ({}),
    },
    lastItem: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const blogImage = computed<string>(
      () => new URL(`../../assets/${props.blog.image}`, import.meta.url).href
    );

    return {
      isMobile,
      blogImage,
      formatDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.blog {
  padding: 30px 20px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;

  // &-title {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  // }

  img {
    width: 80px;
    border-radius: 10px;
    border: 1px solid $primary;
    align-self: flex-start;
  }
}
</style>
