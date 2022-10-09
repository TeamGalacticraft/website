<template>
  <div class="button-container">
    <button
      class="button"
      :class="`text-${textColour} bg-${backgroundColour} border-${borderColour}`"
      :style="styles"
    >
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
    fontSize: {
      type: Number,
      default: 16,
    },
    borderColour: {
      type: String,
      default: "",
    },
    fontWeight: {
      type: Number,
      default: 600,
    },
  },
  setup(props) {
    const styles = computed(() => {
      return {
        border: props.borderColour ? "1px solid" : "none",
      };
    });

    return {
      styles,
    };
  },
});
</script>

<style lang="scss" scoped>
.button {
  background: none;
  padding: v-bind(padding);
  font-size: #{v-bind(fontSize)}px;
  font-weight: v-bind(fontWeight);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>
