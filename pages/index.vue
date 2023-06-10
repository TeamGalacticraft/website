<template>
  <!-- Header -->
  <div class="header">
    <div class="xf-center">
      <div class="xf-text-center xf-mb-2">
        <img src="../assets/galactic-graphic.png" alt="" />
      </div>

      <div class="header-downloads xf-flex-center xf-bg-black xf-py-2">
        <xf-icon class="xf-mr-1 xf-fw-600" src="icons/flame.svg" />
        <span>15,527,478</span>
        <span class="xf-ml-1 xf-text-colour-grey">DOWNLOADS</span>
      </div>
    </div>
  </div>

  <!-- Blogs -->
  <div class="blogs xf-py-8">
    <div class="max-width">
      <div
        v-for="(blog, i) in blogs"
        :key="i"
        class="blogs-item xf-text-colour-white xf-hover xf-cursor-pointer xf-p-4"
        @click="viewBlog(blog.slug.current)"
      >
        <img
          class="xf-w-100"
          :src="cmsImage(blog.mainImage.asset._ref).url()"
          alt=""
        />

        <!-- <p class="xf-text-10 xf-text-colour-secondary">{{ blog.tag }}</p> -->
        <h2>{{ blog.title }}</h2>
        <p class="xf-text-12 xf-mt-2">{{ blog.description }}</p>

        <div class="xf-text-10 xf-mt-4 xf-text-colour-secondary">
          <span>{{ formatDate(blog.publishedAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";

// ** Data **
const router = useRouter();

const blogs = ref<any>([]);

// ** Methods **
const getMatchingBlog = async (): Promise<void> => {
  blogs.value = await client.fetch(`*[_type == "post"]`);
};

const viewBlog = (id: string): void => {
  router.push(`/blog/${id}`);
};

getMatchingBlog();
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
    width: 360px;
  }

  &-downloads {
    border-radius: 50px;
    text-align: center;
    color: white;
    font-size: 12px;
    max-width: 240px;
    margin: 0 auto;
    border: 1px solid map-get($gc-colours, "tertiary");
  }
}

.blogs {
  background-color: black;
  background-image: url("/icons/star-bg.svg");
  background-size: contain;
  background-position: center;
  height: 100%;

  &-item {
    img {
      border: 1px solid map-get($gc-colours, "primary");
      border-radius: 5px;
    }
  }
}
</style>
