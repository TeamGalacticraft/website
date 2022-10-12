<template>
  <div class="header">
    <div class="header-content">
      <div class="header-text">
        <transition appear>
          <img
            class="header-text__img"
            src="@/assets/galactic-graphic.png"
            alt=""
          />
        </transition>
        <p class="header-text__p text-14" :class="{ 'my-6 w-85 mx-auto': isMobile }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
          consectetur quam. Morbi consequat, justo id suscipit ultrices, eros ex
          dictum purus, eu semper est metus lacinia tortor. In in leo nunc.
        </p>
      </div>

      <div
        class="header-buttons"
        :class="{ 'mt-10': isMobile, 'mt-6': isTablet }"
      >
        <Button
          v-if="!isMobile"
          class="mr-2 header-button__download"
          background-colour=""
          text-colour="primary"
          border-colour="primary"
          :border-width="2"
          :width="200"
          :height="50"
        >
          DOWNLOAD
        </Button>
        <Button
          class="header-button__changelog"
          background-colour=""
          text-colour="secondary"
          border-colour="secondary"
          :width="200"
          :height="50"
        >
          View changelog
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isMobile, isTablet } from "@/composables/mediaQueries";
import { gsap } from "gsap";

export default defineComponent({
  name: "Header",
  setup() {
    onMounted(() => {
      gsap.to(".header-text__img", { opacity: 1, y: 0, duration: 1.5 });
      gsap.to(".header-text__p", { opacity: 1, y: 0, duration: 1.5 });
      gsap.to(".header-button__changelog", { opacity: 1, y: 0, duration: 1.5 });
      gsap.to(".header-button__download", { opacity: 1, y: 0, duration: 1.5 });
    });

    return {
      isMobile,
      isTablet,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/header-bg.png");
  height: 600px;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &-buttons {
    display: flex;
    justify-content: center;
  }

  &-button__download,
  &-button__changelog {
    opacity: 0;
    transform: translateY(20px);
  }

  &-text {
    max-width: 500px;
    margin: 0 auto;

    &__img {
      opacity: 0;
      transform: translateY(-50px);
    }

    &__p {
      opacity: 0;
      transform: translateY(50px);
    }

    img {
      width: 340px;
    }
  }

  @media (min-width: 768px) {
    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      max-width: 700px;
    }

    img {
      width: 400px;
    }
  }
}
</style>
