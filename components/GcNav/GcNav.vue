<template>
  <xf-nav
    background-colour="black"
    :menu-button="false"
    :inner-padding="isLarge ? 8 : 5"
    transparent
  >
    <xf-icon
      v-if="route.name === 'blog-slug'"
      class="xf-hover xf-cursor-pointer"
      src="/icons/arrow-left-solid.svg"
      fill="white"
      :size="20"
      @click="router.push('/')"
    />

    <div class="xf-w-100 xf-flex xf-flex-align-items-center">
      <template v-if="isSmall">
        <div v-if="route.name !== 'blog-slug'" style="width: 20px" />

        <xf-menu
          v-if="route.path === '/'"
          class="xf-ml-auto xf-text-colour-white"
          background-colour="grey-darken-4"
        >
          <template #activator>
            <xf-button
              style="order: 1"
              background-colour="primary"
              text-colour="black"
            >
              Download
            </xf-button>
          </template>

          <download-options />
        </xf-menu>
      </template>

      <xf-icon
        class="xf-ml-auto xf-cursor-pointer xf-hover"
        src="/icons/discord.svg"
        :size="isMedium ? 30 : 24"
        @click="openLink('https://dev.discord.galacticraft.net')"
      />
    </div>
  </xf-nav>
</template>

<script lang="ts" setup>
import { XfNav, XfButton, XfIcon, XfMenu } from "xf-cmpt-lib";
import DownloadOptions from "./DownloadOptions.vue";

// ** Data **
const route = useRoute();
const router = useRouter();

// ** Methods **
const openLink = (route: string): void => {
  window.open(route);
};
</script>

<style lang="scss" scoped>
:deep(.xf-menu-modal-content) {
  border-radius: 10px;
}

.xf-button {
  border-radius: 10px !important;
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: 12px !important;

  @include sm-up {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    font-size: 18px !important;
  }

  @include sm-up {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }
}

a {
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.1em;
}
</style>
