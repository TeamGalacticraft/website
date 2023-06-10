<template>
  <xf-nav menu-button-colour="white" transparent>
    <xf-icon
      v-if="route.name === 'blog-slug'"
      class="xf-hover xf-cursor-pointer"
      src="/icons/arrow-left-solid.svg"
      fill="white"
      :size="20"
      @click="router.push('/')"
    />

    <template #drawer>
      <div class="gc-nav-items xf-p-8 xf-text-colour-white">
        <ul>
          <li v-for="(opt, i) in navOptions" :key="i" class="xf-my-4">
            <a :href="opt.route">
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
  // {
  //   route: "/changelog",
  //   text: "Changelog",
  // },
];

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss">
.xf-nav {
  margin-top: 10px !important;
}
</style>

<style lang="scss" scoped>
.gc-nav-items {
  text-align: center;

  .xf-button {
    border-radius: 50px;
  }

  a {
    text-decoration: none;
  }
}
</style>
