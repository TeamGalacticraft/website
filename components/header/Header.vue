<template>
  <div class="header">
    <div class="header-content">
      <div class="header-text">
        <img src="@/assets/galactic-graphic.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
          consectetur quam. Morbi consequat, justo id suscipit ultrices, eros ex
          dictum purus, eu semper est metus lacinia tortor. In in leo nunc.
        </p>
      </div>

      <div class="header-buttons mt-10">
        <Button
          class="mb-2"
          background-colour=""
          text-colour="primary"
          border-colour="primary"
          padding="10px 50px"
          :border-width="2"
        >
          <div>
            <p class="m-0" style="font-size: 18px">DOWNLOAD</p>
            <p class="m-0 text-secondary" style="font-size: 12px">v1.2.1</p>
          </div>
        </Button>
        <Button
          background-colour=""
          text-colour="secondary"
          border-colour="secondary"
          padding="5px 20px"
          :font-weight="500"
        >
          View changelog
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
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

  &-content {
    margin: 0 20px;
  }

  &-text {
    img {
      width: 320px;
    }
  }
}
</style>
