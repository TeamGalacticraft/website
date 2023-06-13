<template>
  <footer class="footer xf-text-colour-grey xf-p-6">
    <p class="xf-text-center xf-w-100">&copy; {{ currentYear }} Galacticraft</p>
    <!-- <p class="xf-ml-auto">
      Created by
      <a href="https://alexlong.dev/" target="_blank">Alex</a>
    </p> -->
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

  p {
    font-size: 10px;

    @include md-up {
      font-size: 14px;
    }
  }

  a {
    color: map-get($gc-colours, "secondary") !important;
  }
}
</style>
