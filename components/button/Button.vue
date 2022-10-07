<template>
  <div class="button-container">
    <button class="button" :class="`text-${textColour} bg-${backgroundColour}`">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    backgroundColour: {
      type: String,
      default: "primary",
    },
    textColour: {
      type: String,
      default: "white",
    },
    padding: {
      type: String,
      default: "10px 20px",
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  background: none;
  border: none;
  padding: v-bind(padding);
}
</style>
