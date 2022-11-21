import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { defineNuxtPlugin } from "#app";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const customTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#00a8ff",
    secondary: "#b3c5ef",
    background: "#040f13",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: "customTheme",
        themes: {
          customTheme,
        },
      },
    })
  );
});
