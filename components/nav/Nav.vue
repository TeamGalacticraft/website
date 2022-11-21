<template>
  <v-navigation-drawer
    v-if="isMobile"
    class="bg-background"
    location="end"
    v-model="isNavDrawerOpen"
  >
    <v-list class="px-0 mt-8" nav>
      <v-list-item class="px-0" v-for="link in navItems">
        <gc-link class="pl-6" :link="link" @click="toggleNavDrawer" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar class="nav px-4" flat>
    <v-spacer />

    <div v-if="isMobile" class="menu-btn" @click="toggleNavDrawer">
      <span v-for="i in 4" :key="i" />
    </div>

    <div v-else class="nav-links">
      <gc-link v-for="link in navItems" :link="link" />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isMobile } from "@/composables/mediaQueries";
import { LinkType } from "@/components/link/types/link.types";
import { gsap } from "gsap";

import GcLink from "@/components/link/GcLink.vue";

export default defineComponent({
  name: "Nav",
  components: {
    GcLink,
  },
  props: {
    hideTitle: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const navItems: LinkType[] = [
      {
        link: "/",
        name: "Home",
      },
      {
        link: "https://discord.com/invite/n3QqhMYyFK",
        name: "Discord",
      },
      {
        link: "https://forum.micdoodle8.com/index.php",
        name: "Forum",
      },
    ];

    const isNavDrawerOpen = ref<boolean>(false);

    const toggleNavDrawer = (): void => {
      isNavDrawerOpen.value = !isNavDrawerOpen.value;
    };

    const setGSAP = (): void => {
      gsap.to(".nav-links", { opacity: 1, x: 0, duration: 1.5 });
    };

    watch(isMobile, () => setTimeout(setGSAP, 50), { immediate: true });

    return {
      isMobile,
      isNavDrawerOpen,
      navItems,
      toggleNavDrawer,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/menu-button.scss";

@media (max-width: 767px) {
  .gc-link {
    padding: 15px;

    &:hover {
      background: lighten($background, 5%);
    }
  }
}

.nav {
  z-index: 99;
  background: none;

  .menu-item {
    transform: translateY(40px);
    opacity: 0;
  }

  &-links {
    display: flex;
    gap: 20px;

    opacity: 0;
    transform: translateX(40px);

    @media (min-width: 768px) {
      margin-right: 10%;
    }
  }
}
</style>
