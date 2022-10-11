<template>
  <div id="app">
    <div v-show="!loading">
      <Nav />
      <slot />
      <Footer />
    </div>

    <Loading v-if="loading" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "default",
  setup() {
    const loading = ref<boolean>(false);

    // setTimeout(() => {
    //   loading.value = false;
    // }, 500);

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
