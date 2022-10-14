<template>
  <div class="menu">
    <span
      ref="activator"
      class="cursor-pointer"
      @click="$emit('update:modelValue', true)"
    >
      <slot name="activator" />
    </span>

    <div
      class="menu-modal-backdrop"
      :class="{ 'menu-modal-show': modelValue }"
      @click="$emit('update:modelValue', false)"
    >
      <div
        class="menu-modal-content"
        ref="content"
        :style="{
          top: position.top,
          left: position.left,
          right: position.right,
          bottom: position.bottom,
          width: `${width}px`,
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from "vue";
// import { MenuPositions } from "./types/menu.types";

/*
      Activator slot
  
      Adding content through the slot makes it clickable - when clicked it will open up the menu
      and position it over the content without having to pass any position styling from outside the component
    */

export default defineComponent({
  name: "Menu",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: undefined,
    },
    position: {
      type: Object as PropType<any>,
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const position = toRef(props, "position");

    const content = ref<HTMLDivElement>();
    const activator = ref<HTMLSpanElement>();

    const setPositioning = (): void => {
      const offScreen: boolean =
        innerWidth - activator.value.offsetLeft < content.value.clientWidth;

      position.value.top = `${activator.value.offsetTop + 20}px`;

      position.value.left = `${
        offScreen
          ? activator.value.offsetLeft - content.value.clientWidth + 10
          : activator.value.offsetLeft - 5
      }px`;
    };

    onMounted(() => {
      // Needed as not shown whilst loading page
      setTimeout(setPositioning, 1000);
    });

    return {
      activator,
      content,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu-modal {
  &-backdrop {
    position: fixed;
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    visibility: hidden;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    transform: scale(0.9);
    transform-origin: top right;
  }

  &-show {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  }

  &-content {
    position: absolute;
    color: $secondary;
    background-color: $background;
    z-index: 99;
    border-radius: 5px;
    padding: 10px;

    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
    transform: none;
  }
}
</style>
