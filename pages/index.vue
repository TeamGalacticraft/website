<template>
  <div class="header">
    <div class="xf-center">
      <div class="xf-text-center xf-mb-2">
        <img src="../assets/galactic-graphic.png" alt="" />
      </div>

      <div class="header-downloads xf-flex-center xf-bg-black xf-py-1">
        <xf-icon class="xf-mr-1" src="icons/flame.svg" />
        <span class="xf-fw-600">1,000,000+</span>
        <span class="xf-ml-1 xf-text-colour-grey">DOWNLOADS</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/header-bg.png");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 450px;
  width: 100%;
  position: relative;

  img {
    width: 320px;
  }

  &-downloads {
    border-radius: 50px;
    text-align: center;
    color: white;
    font-size: 10px;
    max-width: 200px;
    margin: 0 auto;
    border: 1px solid map-get($gc-colours, "tertiary");
  }
}
</style>
