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

    <portable-text :value="data.body" :components="components" />
  </div>

  <xf-modal
    v-model="isModalOpen"
    :max-width="1200"
    background-colour="tertiary"
    close-icon-colour="white"
    :padding="2"
  >
    <gc-carousel
      :images="selectedImages"
      :index-override="selectedIndex"
      :allow-modal-open="false"
    />
  </xf-modal>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from "@/composables/intersectionObserver";
import { XfModal } from "xf-cmpt-lib";
import { PortableText } from "@portabletext/vue";

import GcCarousel from "~/components/Carousel/GcCarousel.vue";

// ** Data **
const route = useRoute();

const isModalOpen = ref<boolean>(false);
const selectedImages = ref<SanityImage[]>([]);
const selectedIndex = ref<number>(0);

const { inView } = useIntersectionObserver("blog");

const components = {
  types: {
    lineBreak: () =>
      h("hr", {
        class: "line-break",
      }),
    youtube: (props) =>
      h("iframe", {
        src: props.value.url,
        allowfullscreen: "allowfullscreen",
      }),
    gallery: (props) =>
      h(GcCarousel, {
        images: props.value.images,
        "onOpen:modal": openModal,
      }),
  },
};

// ** Methods **
const { data } = await useSanityQuery(
  '*[_type == "post" && slug.current == $slug][0]',
  { slug: route.params.slug || "" },
);

const openModal = (image: SanityImages): void => {
  selectedImages.value = image.images;
  selectedIndex.value = image.index;

  isModalOpen.value = true;
};

// ** Meta **
useHead({
  title: data.value.title,
});
</script>

<style lang="scss">
@use "sass:map";
@use "@/assets/styles/variables";
@use "@/assets/styles/mixins";

.blog-post {
  max-width: 350px;
  margin: 0 auto;

  @include mixins.sm-up {
    max-width: 500px;
  }

  @include mixins.md-up {
    margin-top: 60px;
    max-width: 650px;
  }

  img {
    border: 1px solid map.get(variables.$gc-colours, "tertiary");
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
    color: map.get(variables.$gc-colours, "primary");
  }
}
</style>
