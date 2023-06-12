<template>
  <footer class="footer xf-text-colour-grey xf-p-6 xf-text-center">
    <p class="xf-text-10">&copy; {{ currentYear }} Galacticraft.</p>
    <p class="xf-ml-auto xf-text-10">
      Created by
      <a href="https://alexlong.dev/" target="_blank">Alex</a>
    </p>
  </footer>
</template>

<script lang="ts" setup>
// ** Data **
const currentYear: number = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;

  a {
    color: map-get($gc-colours, "secondary") !important;
  }
}
</style>
