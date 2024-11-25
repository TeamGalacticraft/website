// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
          src: `https://www.googletagmanager.com/gtag/js?id=G-${process.env.GA_KEY}`,
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
          api: "modern-compiler",
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
  site: {
    url: process.env.SITE_URL,
    name: process.env.SITE_NAME,
  },
  modules: [
    [
      "@nuxtjs/sanity",
      {
        projectId: process.env.SANITY_KEY,
        dataset: "production",
        apiVersion: "2024-11-23",
        useCdn: false,
      },
    ],
    "@nuxtjs/sitemap",
  ],
  compatibilityDate: "2024-11-24",
});
