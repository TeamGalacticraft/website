<template>
  <v-layout id="default">
    <template v-if="!loading">
      <main>
        <gc-nav />
        <!-- Reset page to activate transitions -->
        <div :key="route.path">
          <slot />
        </div>
      </main>

      <gc-footer />
    </template>

    <gc-loading v-else />
  </v-layout>
</template>

<script lang="ts">
import GcNav from "@/components/nav/GcNav.vue";
import GcFooter from "@/components/footer/GcFooter.vue";
import GcLoading from "@/components/loading/GcLoading.vue";

export default defineComponent({
  name: "default",
  components: {
    GcFooter,
    GcNav,
    GcLoading,
  },
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
#default {
  display: grid;
  grid-gap: 50px;
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
