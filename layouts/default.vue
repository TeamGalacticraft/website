<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "default",
  setup() {
    onMounted(() => {
      setWidthValues(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidthValues(window.innerWidth);
      });
    });
  },
});
</script>
