<template>
  <div class="download-options xf-p-4">
    <ul>
      <li
        v-for="(opt, i) in downloadOptions"
        :key="i"
        :class="{ 'xf-mt-4': i !== 0 }"
      >
        <a :href="opt.route" target="_blank">
          <span class="xf-flex xf-flex-align-items-center">
            <xf-icon
              class="xf-mr-2"
              :src="`icons/${opt.icon}.svg`"
              :size="opt.iconSize"
            />
            {{ opt.text }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";

const downloadOptions = [
  {
    text: "Curseforge",
    icon: "curseforge",
    route:
      "https://www.curseforge.com/minecraft/mc-mods/galacticraft-legacy/files",
    iconSize: 32,
  },
  {
    text: "Modrinth",
    icon: "modrinth",
    route: "https://modrinth.com/mod/galacticraft-legacy/versions",
    iconSize: 28,
  },
];
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
