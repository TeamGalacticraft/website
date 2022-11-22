<template>
  <div>
    <gc-header />

    <div class="blog mt-8">
      <div
        v-for="(blog, i) in mockBlogs"
        class="blog-item"
        :class="`blog-item-${i}`"
        :data-trigger-id="`blog-item-${i}`"
      >
        <gc-blog-item :last-item="i + 1 === mockBlogs.length" :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BlogItem } from "~~/components/blog-item/types/blogItem.types";

import GcHeader from "@/components/header/GcHeader.vue";
import GcBlogItem from "@/components/blog-item/GcBlogItem.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "Index",
  components: {
    GcHeader,
    GcBlogItem,
  },
  setup() {
    const mockBlogs: BlogItem[] = [
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna magna, vulputate ut turpis in, placerat efficitur turpis. Aenean elementum arcu metus, non euismod nulla porta ac. Suspendisse potenti. Sed a fermentum nunc. Morbi non magna ullamcorper, consequat mi eu, congue justo. In iaculis aliquam nulla eget pharetra. Vestibulum non porttitor ipsum, id sollicitudin elit. Maecenas eleifend est nec odio malesuada.",
      },
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna magna, vulputate ut turpis in, placerat efficitur turpis. Aenean elementum arcu metus, non euismod nulla porta ac. Suspendisse potenti. Sed a fermentum nunc. Morbi non magna ullamcorper, consequat mi eu, congue justo. In iaculis aliquam nulla eget pharetra. Vestibulum non porttitor ipsum, id sollicitudin elit. Maecenas eleifend est nec odio malesuada.",
      },
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna magna, vulputate ut turpis in, placerat efficitur turpis. Aenean elementum arcu metus, non euismod nulla porta ac. Suspendisse potenti. Sed a fermentum nunc. Morbi non magna ullamcorper, consequat mi eu, congue justo. In iaculis aliquam nulla eget pharetra. Vestibulum non porttitor ipsum, id sollicitudin elit. Maecenas eleifend est nec odio malesuada.",
      },
      {
        title: "Galacticraft 5",
        date: "2022-10-10",
        image: "rocket.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna magna, vulputate ut turpis in, placerat efficitur turpis. Aenean elementum arcu metus, non euismod nulla porta ac. Suspendisse potenti. Sed a fermentum nunc. Morbi non magna ullamcorper, consequat mi eu, congue justo. In iaculis aliquam nulla eget pharetra. Vestibulum non porttitor ipsum, id sollicitudin elit. Maecenas eleifend est nec odio malesuada.",
      },
    ];

    const setGSAP = (): void => {
      const blogItems = document.querySelectorAll(".blog-item");

      blogItems.forEach((item, index) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: `.${item.attributes["data-trigger-id"].value}`,
            start: "top bottom-=150px",
          },
          x: 0,
          opacity: 1,
          duration: 0.5,
        });
      });
    };

    onMounted(setGSAP);

    return {
      mockBlogs,
    };
  },
});
</script>

<style lang="scss" scoped>
.blog {
  max-width: 700px;
  margin: 0 auto;

  &-item {
    transform: translateX(-200px);
    opacity: 0;
  }

  @media (min-width: 1440px) {
    max-width: 800px;
  }
}
</style>
