// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL,
    },
  },
  app: {
    head: {
      title: "Galacticraft",
      htmlAttrs: {
        lang: "en-GB",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Galacticraft is all about exploring other planets, moons and asteroids! Each planet, moon and asteroid belt is a dimension in the game. The same goes for space stations.",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-MC0JD5TPJK",
          async: true,
        },
        {
          src: "/ga.js",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  build: {
    transpile: ["mixins"],
  },
  modules: [
    "nuxt-simple-sitemap",
    [
      "@nuxtjs/sanity",
      {
        projectId: "yiv23jd7",
        dataset: "production",
        apiVersion: "2023-06-10",
        useCdn: false,
      },
    ],
  ],
});
