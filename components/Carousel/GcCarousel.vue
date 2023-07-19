<template>
  <div class="gc-carousel">
    <carousel v-model="selectedIndex" class="gc-carousel-content" wrap-around>
      <slide v-for="(img, i) in images" :key="i">
        <SanityImage
          class="xf-w-100"
          :asset-id="img.asset._ref"
          auto="format"
        />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <xf-icon
      v-if="isMedium && allowModalOpen"
      class="gc-carousel-expand xf-cursor-pointer xf-hover"
      src="/icons/expand.svg"
      fill="white"
      :size="20"
      @click="openImageModal"
    />
  </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import { XfIcon } from "xf-cmpt-lib";

// ** Props **
const props = defineProps({
  images: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  allowModalOpen: {
    type: Boolean,
    default: true,
  },
  indexOverride: {
    type: Number,
    default: 0,
  },
});

// ** Emits **
const emits = defineEmits(["open:modal"]);

// ** Data **
const selectedIndex = ref<number>(0);

// ** Methods **
const openImageModal = (): void => {
  if (props.allowModalOpen) {
    emits("open:modal", { images: props.images, index: selectedIndex.value });
  }
};

// ** Watchers **
watch(
  () => props.indexOverride,
  (val) => {
    selectedIndex.value = val;
  },
  { immediate: true }
);
</script>

<style lang="scss">
.gc-carousel {
  position: relative;

  &-content {
    --vc-pgn-width: 10px;
    --vc-pgn-height: 10px;
    --vc-pgn-background-color: #b3c5ef;
    --vc-pgn-border-radius: 50%;
    --vc-pgn-active-color: #00a8ff;

    --vc-nav-color: #fff;
    --vc-nav-width: 40px;
    --vc-nav-height: 40px;
  }

  &-expand {
    position: absolute;
    right: 15px;
    bottom: 40px;
  }
}
</style>
