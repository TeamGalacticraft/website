<template>
  <div class="header">
    <div class="header-content">
      <div class="header-text">
        <img src="@/assets/galactic-graphic.png" alt="" />
        <p class="text-14 w-85 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
          consectetur quam. Morbi consequat, justo id suscipit ultrices, eros
          ex.
        </p>
      </div>

      <div class="header-buttons mt-6">
        <Button
          v-if="!isMobile"
          class="mb-1"
          background-colour=""
          text-colour="primary"
          border-colour="primary"
          padding="7px 50px"
          :border-width="2"
        >
          <div>
            <p class="m-0">DOWNLOAD</p>
            <p class="m-0 text-secondary text-10">v1.2.1</p>
          </div>
        </Button>
        <Button
          background-colour=""
          text-colour="secondary"
          border-colour="secondary"
          padding="5px 20px"
          :font-weight="500"
          :font-size="12"
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

export default defineComponent({
  name: "Header",
  setup() {
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
  height: 500px;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &-text {
    img {
      width: 320px;
    }
  }
}
</style>
