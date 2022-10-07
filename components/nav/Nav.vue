<template>
  <div class="nav">
    <div class="spacer" />

    <div
      v-if="isMobile"
      class="menu-btn"
      :class="{ 'menu-btn__open': isNavDrawerOpen }"
      @click="toggleNavDrawer"
    >
      <span v-for="i in 4" :key="i" />
    </div>

    <div v-else class="nav-links">
      <Link v-for="link in navItems" :link="link" />
    </div>
  </div>

  <div v-if="isMobile" class="nav-drawer" :style="{ height: contentHeight }">
    <div ref="content">
      <Link v-for="link in navItems" :link="link" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isMobile } from "@/composables/mediaQueries";
import { LinkType } from "@/components/link/types/link.types";
import { getNavItems } from "@/api/index";

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
        link: "/news",
        name: "News",
      },
      {
        link: "https://discord.com",
        name: "Discord",
      },
      {
        link: "https://forum.com",
        name: "Forum",
      },
    ];

    onMounted(async () => {
      const test = await getNavItems();
      console.log(test);
    });

    const isNavDrawerOpen = ref<boolean>(false);
    const content = ref<HTMLDivElement>();
    const contentHeight = ref<string>("0px");

    const toggleNavDrawer = (): void => {
      isNavDrawerOpen.value = !isNavDrawerOpen.value;

      if (contentHeight.value) {
        contentHeight.value = `${
          isNavDrawerOpen.value ? content.value?.clientHeight : 0
        }px`;
      }
    };

    return {
      isMobile,
      isNavDrawerOpen,
      navItems,
      content,
      contentHeight,
      toggleNavDrawer,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/menu-button.scss";

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 10px 30px;

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
    gap: 15px;
  }

  &-drawer {
    position: absolute;
    text-align: center;
    background: $background;
    width: 100%;
    overflow: hidden;
    transition: height 0.2s ease-in-out;

    .link {
      padding: 15px;

      &:hover {
        background: lighten($background, 5%);
      }
    }
  }
}
</style>
