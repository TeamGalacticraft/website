<template>
  <div class="loading-container">
    <div class="w-50 mx-auto">
      <div class="loader" />
      <div class="loader-bar" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
});
</script>

<style lang="scss" scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: $background;
}

.loader {
  width: 32px;
  height: 90px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 50% 50% 0 0;
  border-bottom: 10px solid $primary;
  background-color: #fff;
  background-image: radial-gradient(
      ellipse at center,
      #fff 34%,
      $primary 35%,
      $primary 54%,
      #fff 55%
    ),
    linear-gradient($primary 10px, transparent 0);
  background-size: 28px 28px;
  background-position: center 20px, center 2px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: animloaderBack 5s linear infinite alternate;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 44px;
    border-radius: 50%;
    box-shadow: 0px 15px $primary inset;
    top: 67px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 34px;
    height: 34px;
    top: 112%;
    background: radial-gradient(
      ellipse at center,
      #ffdf00 8%,
      rgba(249, 62, 0, 0.6) 24%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 50% 50% 0;
    background-repeat: no-repeat;
    background-position: -44px -44px;
    background-size: 100px 100px;
    box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
    box-sizing: border-box;
    animation: animloader 1s linear infinite alternate;
  }
}

.loader-bar {
  width: 100%;
  height: 8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  top: 50px;

  &::before {
    content: "";
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 168, 255, 0.15);
    background-image: linear-gradient(
      45deg,
      rgba(0, 168, 255, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 168, 255, 0.25) 50%,
      rgba(0, 168, 255, 0.25) 75%,
      transparent 75%,
      transparent
    );
    background-size: 15px 15px;
    z-index: 10;
  }

  &::after {
    content: "";
    box-sizing: border-box;
    width: 0%;
    height: 100%;
    background-color: $primary;
    position: absolute;
    border-radius: 0 4px 4px 0;
    top: 0;
    left: 0;
    animation: animFw 1.2s ease-in infinite;
  }
}

@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes animloaderBack {
  0%,
  30%,
  70% {
    transform: translateY(0px);
  }
  20%,
  40%,
  100% {
    transform: translateY(-5px);
  }
}

@keyframes animloader {
  0% {
    box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
    width: 34px;
    height: 34px;
    background-position: -44px -44px;
    background-size: 100px 100px;
  }

  100% {
    box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
    width: 30px;
    height: 28px;
    background-position: -36px -36px;
    background-size: 80px 80px;
  }
}
</style>
