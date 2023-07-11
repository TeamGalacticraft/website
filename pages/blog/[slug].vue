<template>
  <div
    v-if="data"
    id="blog"
    class="blog-post xf-text-colour-white xf-py-20 xf-px-6 transition"
    :class="{ 'transition-in-view': inView }"
  >
    <SanityImage
      class="xf-w-100 xf-mb-4"
      :asset-id="data.mainImage.asset._ref"
      auto="format"
    />

    <div class="xf-mb-4">
      <h1>{{ data.title }}</h1>
      <p class="xf-text-10 xf-mt-1 xf-text-colour-secondary">
        {{ formatDate(data.publishedAt) }}
      </p>
    </div>

    <sanity-blocks :blocks="data.body" :serializers="serializers" />
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from "@/composables/intersectionObserver";
import { SanityBlocks } from "sanity-blocks-vue-component";
import { Serializers } from "sanity-blocks-vue-component/dist/types";

import GcCarousel from "~/components/Carousel/GcCarousel.vue";

// ** Data **
const route = useRoute();

const { data } = await useSanityQuery(
  '*[_type == "post" && slug.current == $slug][0]',
  { slug: route.params.slug || "" }
);

const { inView } = useIntersectionObserver("blog");

useHead({
  title: data.value.title,
});

// ** Sanity **
const serializers: Partial<Serializers> = {
  types: {
    lineBreak: () => h("hr", { class: "line-break" }),
    youtube: (props: any) => h("iframe", { src: props.url }),
    gallery: (props: any) => h(GcCarousel, { images: props.images }),
  },
};
</script>

<style lang="scss">
.blog-post {
  max-width: 350px;
  margin: 0 auto;

  @include sm-up {
    max-width: 500px;
  }

  @include md-up {
    margin-top: 60px;
    max-width: 650px;
  }

  img {
    border: 1px solid map-get($gc-colours, "tertiary");
    border-radius: 5px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
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
