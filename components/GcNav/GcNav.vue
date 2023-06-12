<template>
  <xf-nav
    menu-button-colour="white"
    background-colour="black"
    :menu-button="!isLarge"
    :inner-padding="5"
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

    <div
      v-if="isLarge"
      class="gc-nav-items xf-mx-auto xf-flex xf-flex-align-items-center xf-gap-5 xf-text-colour-white"
    >
      <a
        v-for="(opt, i) in navOptions"
        class="xf-h-max-content"
        :href="opt.route"
        :style="i > 1 ? 'order: 2' : ''"
      >
        {{ opt.text }}
      </a>

      <xf-button
        style="order: 1"
        background-colour="primary"
        text-colour="black"
      >
        Download
      </xf-button>
    </div>

    <template v-if="!isLarge" #drawer>
      <div class="gc-nav-items xf-mt-8 xf-p-8 xf-text-colour-white">
        <ul>
          <li
            v-for="(opt, i) in navOptions"
            :key="i"
            class="xf-my-4 xf-my-sm-8"
          >
            <a class="xf-text-18-sm" :href="opt.route">
              {{ opt.text }}
            </a>
          </li>
        </ul>

        <xf-button
          class="xf-mx-auto xf-mt-10"
          background-colour="primary"
          text-colour="black"
        >
          Download
        </xf-button>
      </div>
    </template>
  </xf-nav>
</template>

<script lang="ts" setup>
import { XfNav, XfButton, XfIcon } from "xf-cmpt-lib";

// ** Data **
const navOptions = [
  {
    route: "/",
    text: "Home",
  },
  {
    route: "https://dev.discord.galacticraft.net/",
    text: "Discord",
  },
  {
    route: "https://forum.micdoodle8.com/",
    text: "Forum",
  },
  {
    route: "/changelog",
    text: "Changelog",
  },
];

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped>
.gc-nav-items {
  text-align: center;

  .xf-button {
    border-radius: 50px;

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
  }
}
</style>
