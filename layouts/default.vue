<template>
  <div id="app">
    <template v-if="!loading">
      <main>
        <Nav />
        <!-- Reset page to activate transitions -->
        <div :key="route.path">
          <slot />
        </div>
      </main>

      <Footer />
    </template>

    <Loading v-else />
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

<style lang="scss">
#app {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-areas: "main" "footer";
  grid-template-rows: 1fr 80px;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
</style>
