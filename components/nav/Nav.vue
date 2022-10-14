<template>
  <nav class="nav">
    <div class="spacer" />

    <Menu v-if="isMobile" v-model="isNavDrawerOpen">
      <template #activator>
        <div
          class="menu-btn"
          :class="{ 'menu-btn__open': isNavDrawerOpen }"
          @click="toggleNavDrawer"
        >
          <span
            :class="`menu-item menu-item-${i}`"
            :data-trigger-id="`menu-item-${i}`"
            v-for="i in 4"
            :key="i"
          />
        </div>
      </template>

      <div>
        <Link v-for="link in navItems" :link="link" />
      </div>
    </Menu>

    <div v-else class="nav-links">
      <Link v-for="link in navItems" :link="link" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isMobile } from "@/composables/mediaQueries";
import { LinkType } from "@/components/link/types/link.types";
import { gsap } from "gsap";

export default defineComponent({
  name: "Nav",
  props: {
    hideTitle: {
      type: Boolean,
      defualt: true,
    },
  },
  setup() {
    const navItems: LinkType[] = [
      {
        link: "/",
        name: "Home",
      },
      {
        link: "/news",
        name: "News",
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
      if (isMobile.value) {
        const menuItems = document.querySelectorAll(".menu-item");

        menuItems.forEach((item, index) => {
          if (!isNavDrawerOpen.value && index !== 2) {
            gsap.to(item, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: index * 0.1,
            });
          }
        });
      } else {
        gsap.to(".nav-links", { opacity: 1, x: 0, duration: 1.5 });
      }
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

.nav {
  position: absolute;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  .menu-item {
    transform: translateY(40px);
    opacity: 0;
  }

  &-title {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: 28px;
      margin: 0;
      margin-left: 10px;
    }
  }

  &-links {
    display: flex;
    gap: 10px;

    opacity: 0;
    transform: translateX(40px);
  }

  .link {
    padding: 15px;

    @media (max-width: 767px) {
      &:hover {
        background: lighten($background, 5%);
      }
    }
  }
}
</style>
