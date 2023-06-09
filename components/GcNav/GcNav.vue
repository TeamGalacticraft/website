<template>
  <xf-nav transparent>
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
import { XfNav, XfButton } from "xf-cmpt-lib";

const navOptions = [
  {
    route: "",
    text: "News",
  },
  {
    route: "",
    text: "Discord",
  },
  {
    route: "",
    text: "Forum",
  },
  {
    route: "",
    text: "Changelog",
  },
];
</script>

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
