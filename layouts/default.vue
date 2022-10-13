<template>
  <div id="app">
    <div v-if="!loading" :key="route.path">
      <Nav />
      <slot />
      <!-- <Footer /> -->
    </div>

    <Loading v-if="loading" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "default",
  setup() {
    const route = useRoute();
    const loading = ref<boolean>(true);

    setTimeout(() => {
      loading.value = false;
    }, 500);

    onMounted(() => {
      setWidthValues(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidthValues(window.innerWidth);
      });
    });

    return {
      route,
      loading,
    };
  },
});
</script>
