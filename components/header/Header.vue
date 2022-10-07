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

      <div class="header-buttons">
        <Button class="mb-2">Download</Button>
        <Button>View changelog</Button>
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
  background: url("@/assets/header-bg.png");
  height: 500px;
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
      width: 300px;
    }
  }
}
</style>
