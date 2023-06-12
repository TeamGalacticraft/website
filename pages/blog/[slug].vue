<template>
  <div v-if="post" class="blog-post xf-text-colour-white xf-py-20 xf-px-6">
    <div class="max-width">
      <img
        class="xf-w-100 xf-mb-4"
        :src="cmsImage(post.mainImage.asset._ref).url()"
        alt=""
      />

      <div class="xf-mb-4">
        <h1>{{ post.title }}</h1>
        <p class="xf-text-10 xf-mt-1 xf-text-colour-secondary">
          {{ formatDate(post.publishedAt) }}
        </p>
      </div>

      <sanity-blocks :blocks="post.body" :serializers="serializers" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
import { Serializers } from "sanity-blocks-vue-component/dist/types";

import GcCarousel from "~/components/Carousel/GcCarousel.vue";

// ** Data **
const route = useRoute();

const post = ref<any>();

// ** Sanity **
const serializers: Partial<Serializers> = {
  types: {
    lineBreak: () => h("hr", { class: "line-break" }),
    youtube: (props: any) => h("iframe", { src: props.url }),
    gallery: (props: any) => h(GcCarousel, { images: props.images }),
  },
};

// ** Methods **
const getMatchingBlog = async () => {
  const { slug = "" } = route.params;

  post.value = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
};

getMatchingBlog();
</script>

<style lang="scss">
.blog-post {
  img {
    border: 1px solid map-get($gc-colours, "primary");
    border-radius: 5px;
  }

  p {
    min-height: 20px !important;
    color: #b3c5ef;
  }

  iframe {
    width: 100%;
    height: 250px;
  }

  hr {
    border: 0;
    background: rgb(59, 59, 59);
    height: 2px;
    margin: 30px 10px;
  }

  a {
    color: map-get($gc-colours, "primary");
  }
}
</style>
