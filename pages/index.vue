<template>
  <div>
    <Header />

    <div class="mt-8">
      <h2 class="text-underline ml-4">Latest blogs</h2>
      <BlogItem
        v-for="(blog, i) in mockBlogs"
        :last-item="i + 1 === mockBlogs.length"
        :blog="blog"
      />
    </div>
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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      },
    ];

    return {
      mockBlogs,
    };
  },
});
</script>

<style lang="scss" scoped></style>
