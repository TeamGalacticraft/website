<template>
  <div class="gc-header">
    <div class="gc-header-content">
      <div class="gc-header-text">
        <transition appear>
          <img
            class="gc-header-text__img"
            src="@/assets/galactic-graphic.png"
            alt=""
          />
        </transition>
        <p
          class="gc-header-text__p text-14"
          :class="{ 'my-6 w-85 mx-auto': isMobile }"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
          consectetur quam. Morbi consequat, justo id suscipit ultrices, eros ex
          dictum purus, eu semper est metus lacinia tortor. In in leo nunc.
        </p>
      </div>

      <div
        class="gc-header-buttons"
        :class="{ 'mt-10': isMobile, 'mt-6': !isMobile }"
      >
        <v-btn
          v-if="!isMobile"
          class="mr-2 fw-700 gc-header-button__download"
          variant="outlined"
          color="primary"
          size="large"
        >
          Download
        </v-btn>
        <nuxt-link to="/changelog">
          <v-btn
            class="gc-header-button__changelog"
            color="white"
            variant="outlined"
            size="large"
          >
            View changelog
          </v-btn>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isMobile, isTablet } from "@/composables/mediaQueries";
import { gsap } from "gsap";

export default defineComponent({
  name: "GcHeader",
  setup() {
    const setGSAP = (): void => {
      gsap.to(".gc-header-text__img", { opacity: 1, y: 0, duration: 1.5 });
      gsap.to(".gc-header-text__p", { opacity: 1, y: 0, duration: 1.5 });
      gsap.to(".gc-header-button__changelog", {
        opacity: 1,
        y: 0,
        duration: 1.5,
      });

      if (!isMobile.value) {
        gsap.to(".gc-header-button__download", {
          opacity: 1,
          y: 0,
          duration: 1.5,
        });
      }
    };

    watch(isMobile, () => setTimeout(setGSAP, 50), {
      immediate: true,
    });

    return {
      isMobile,
      isTablet,
    };
  },
});
</script>

<style lang="scss" scoped>
.gc-header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/header-bg.png");
  height: 600px;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 2px solid $secondary;

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

  @media (min-width: 1440px) {
    &-content {
      max-width: 900px;
    }

    &-buttons {
      margin-top: 50px;
    }

    &-text {
      max-width: 650px;
    }

    img {
      width: 450px;
    }
  }
}
</style>
