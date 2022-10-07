<template>
  <div class="link">
    <a v-if="isOutsideLink" :href="link.link">
      {{ link.name }}
    </a>
    <nuxt-link v-else :to="link.link">
      {{ link.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { LinkType } from "./types/link.types";

export default defineComponent({
  name: "Link",
  props: {
    link: {
      type: Object as PropType<LinkType>,
      default: "",
    },
  },
  setup(props) {
    const isOutsideLink = computed<boolean>(
      () =>
        !!props.link.link.startsWith("http") ||
        !!props.link.link.startsWith("www")
    );

    return {
      isOutsideLink,
    };
  },
});
</script>

<style lang="scss" scoped></style>
