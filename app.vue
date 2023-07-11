<template>
  <gc-nav />

  <main>
    <nuxt-page />
  </main>

  <gc-footer />

  <background />
</template>

<script lang="ts" setup>
onMounted(useMediaQuery);
</script>

<style>
@import "xf-cmpt-lib/dist/cmpt-lib-ts.css";
</style>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
