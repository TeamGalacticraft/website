// https://v3.nuxtjs.org/api/configuration/nuxt-config

export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
    },
  },
  meta: {
    title: "Galacticraft",
    htmlAttrs: {
      lang: "en-GB",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        hid: "description",
        name: "description",
        content:
          "Galacticraft is all about exploring other planets, moons and asteroids! Each planet, moon and asteroid belt is a dimension in the game. The same goes for space stations.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
});
