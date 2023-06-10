<template>
  <carousel class="gc-carousel" wrap-around>
    <slide v-for="(img, i) in images" :key="i">
      <img class="xf-w-100" :src="urlFor(img.asset._ref).url()" alt="" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

// ** Props **
const props = defineProps<{
  images: any[];
  builder: any;
}>();

// ** Methods **
const urlFor = (source: any): any => {
  return props.builder.image(source);
};
</script>

<style lang="scss">
.gc-carousel {
  --vc-pgn-width: 10px;
  --vc-pgn-height: 10px;
  --vc-pgn-background-color: #b3c5ef;
  --vc-pgn-border-radius: 50%;
  --vc-pgn-active-color: #00a8ff;
}
</style>
