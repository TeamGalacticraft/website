<template>
  <!-- Header -->
  <div class="header">
    <div class="xf-center">
      <div class="xf-text-center xf-mb-2">
        <img src="../assets/galactic-graphic.png" alt="" />
      </div>

      <div class="header-downloads xf-flex-center xf-bg-black xf-py-1">
        <xf-icon class="xf-mr-1 xf-fw-600" src="icons/flame.svg" />
        <span class="">15,527,478</span>
        <span class="xf-ml-1 xf-text-colour-grey">DOWNLOADS</span>
      </div>
    </div>
  </div>

  <!-- Blogs -->
  <div class="blogs xf-py-8">
    <div
      v-for="(blog, i) in blogs"
      :key="i"
      class="blogs-item xf-text-colour-white xf-hover xf-cursor-pointer xf-p-4"
      @click="viewBlog(blog.id)"
    >
      <img class="xf-w-100" :src="blog.image" alt="" />

      <p class="xf-text-10 xf-text-colour-secondary">{{ blog.tag }}</p>
      <h2>{{ blog.title }}</h2>
      <p class="xf-text-12 xf-mt-2">{{ blog.desc }}</p>

      <div class="xf-text-10 xf-mt-4 xf-text-colour-secondary">
        <span>{{ blog.date }}</span>
        -
        <span>{{ blog.length }} min read</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";

const router = useRouter();

const blogs = [
  {
    id: "where-is-galacticraft-5",
    image: "blog-1.png",
    tag: "Development update",
    title: "Where is Galacticraft 5?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    length: 5,
    date: "6th June 2023",
  },
  {
    id: "where-is-galacticraft-5",
    image: "blog-2.png",
    tag: "Competition",
    title: "Planet designing contest",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    length: 3,
    date: "27th May 2023",
  },
  {
    id: "where-is-galacticraft-5",
    image: "blog-3.png",
    tag: "Tips & tricks",
    title: "How to build a rocket",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    length: 10,
    date: "21st May 2023",
  },
  {
    id: "where-is-galacticraft-5",
    image: "blog-4.png",
    tag: "Showcase",
    title: "New biome!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    length: 3,
    date: "1st March 2023",
  },
];

const viewBlog = (id: string): void => {
  router.push(`/blog/${id}`);
};
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/header-bg.png");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 400px;
  width: 100%;
  position: relative;

  img {
    width: 320px;
  }

  &-downloads {
    border-radius: 50px;
    text-align: center;
    color: white;
    font-size: 10px;
    max-width: 200px;
    margin: 0 auto;
    border: 1px solid map-get($gc-colours, "tertiary");
  }
}

.blogs {
  background-color: black;
  background-image: url("/icons/star-bg.svg");
  background-size: contain;
  background-position: center;

  &-item {
    max-width: 350px;
    margin: 0 auto;

    img {
      border: 1px solid map-get($gc-colours, "primary");
      border-radius: 5px;
    }
  }
}
</style>
