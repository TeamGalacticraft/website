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
        <p
          class="header-text__p w-85 text-14"
          :class="{ 'my-6 mx-auto': isMobile }"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
          consectetur quam. Morbi consequat, justo id suscipit ultrices.
        </p>
      </div>

      <div class="header-buttons" :class="{ 'mt-10': isMobile }">
        <Button
          v-if="!isMobile"
          class="mb-1"
          background-colour=""
          text-colour="primary"
          border-colour="primary"
          padding="15px"
          :border-width="2"
          :width="250"
        >
          <div>
            <p class="m-0 text-18">DOWNLOAD</p>
            <p class="m-0 text-secondary text-10">v1.2.1</p>
          </div>
        </Button>
        <Button
          class="header-button__changelog"
          background-colour=""
          text-colour="secondary"
          border-colour="secondary"
          padding="10px"
          :font-weight="500"
          :font-size="14"
          :width="250"
        >
          View changelog
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isMobile } from "@/composables/mediaQueries";
import { gsap } from "gsap";

export default defineComponent({
  name: "Header",
  setup() {
    onMounted(() => {
      gsap.to(".header-text__img", { opacity: 1, y: 0, duration: 1.5 });
      gsap.to(".header-text__p", { opacity: 1, y: 0, duration: 1.5 });
      gsap.to(".header-button__changelog", { opacity: 1, y: 0, duration: 1.5 });
    });

    return {
      isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/header-bg.png");
  height: 550px;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &-button {
    &__changelog {
      opacity: 0;
      transform: translateY(20px);
    }
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
      align-items: center;
      max-width: 700px;
    }

    &-text {
      text-align: left;

      p {
        margin-top: 20px;
      }
    }

    img {
      width: 350px;
    }
  }
}
</style>
