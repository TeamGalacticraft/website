<template>
  <div>
    <Header />

    <div class="blog mt-8">
      <h2 class="text-underline ml-4">Latest blogs</h2>
      <div>
        <BlogItem
          v-for="(blog, i) in mockBlogs"
          :last-item="i + 1 === mockBlogs.length"
          :blog="blog"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BlogItem } from "~~/components/blog-item/types/blogItem.types";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const setGSAP = (): void => {
      gsap.to(".blog", {
        scrollTrigger: ".blog",
        x: 0,
      });
    };

    onMounted(setGSAP);

    return {
      mockBlogs,
    };
  },
});
</script>

<style lang="scss" scoped></style>
