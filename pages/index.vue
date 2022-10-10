<template>
  <div>
    <Header />
    <BlogItem v-for="blog in mockBlogs" :blog="blog" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BlogItem } from "~~/components/blog-item/types/blogItem.types";

export default defineComponent({
  name: "Index",
  setup() {
    const mockBlogs: BlogItem[] = [
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },
    ];

    return {
      mockBlogs,
    };
  },
});
</script>

<style lang="scss" scoped></style>
