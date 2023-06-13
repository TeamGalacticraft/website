<template>
  <carousel class="gc-carousel" wrap-around>
    <slide v-for="(img, i) in images" :key="i">
      <SanityImage class="xf-w-100" :asset-id="img.asset._ref" />
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
defineProps<{
  images: any[];
}>();
</script>

<style lang="scss">
.gc-carousel {
  --vc-pgn-width: 7px;
  --vc-pgn-height: 7px;
  --vc-pgn-background-color: #b3c5ef;
  --vc-pgn-border-radius: 50%;
  --vc-pgn-active-color: #00a8ff;
}
</style>
