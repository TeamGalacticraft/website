<template>
  <div class="default">
    <Nav />
    <slot />

    <Loading v-if="loading" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "default",
  setup() {
    const loading = ref<boolean>(true);

    setTimeout(() => {
      loading.value = false;
    }, 800);

    onMounted(() => {
      setWidthValues(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidthValues(window.innerWidth);
      });
    });

    return {
      loading,
    };
  },
});
</script>
