<template>
  <button
    class="button"
    :class="`text-${textColour} bg-${backgroundColour} border-${borderColour} text-${fontSize}`"
    :style="styles"
  >
    <slot />
  </button>
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
    borderWidth: {
      type: Number,
      default: 1,
    },
    fontWeight: {
      type: Number,
      default: 600,
    },
    width: {
      type: Number,
      default: undefined,
    },
    height: {
      type: Number,
      default: undefined,
    },
  },
  setup(props) {
    const styles = computed(() => {
      return {
        border: props.borderColour ? `${props.borderWidth}px solid` : "none",
        width: props.width ? `${props.width}px` : "max-content",
        height: props.height ? `${props.height}px` : undefined,
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
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  padding: v-bind(padding);
  font-weight: v-bind(fontWeight);
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    opacity: 0.7;
  }
}
</style>
