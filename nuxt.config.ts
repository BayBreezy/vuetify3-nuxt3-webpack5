import { VuetifyPlugin } from "webpack-plugin-vuetify";

const title = "Vuetify3 + Nuxt3 + Webpack5";
const shortTitle = "Admin";
const description =
  "Template to get you up and running with Nuxt 3 & Vuetify 3 with Webpack5 as bundler.";
const image = "https://webpack5.behonbaker.com/ss.png";
const url = "https://webpack5.behonbaker.com/";

export default defineNuxtConfig({
  builder: "webpack",
  build: { transpile: ["vuetify"] },
  css: ["~/assets/main.css"],
  modules: [
    "@kevinmarrec/nuxt-pwa",
    "@vueuse/sound/nuxt",
    (_, nuxt) => {
      nuxt.hooks.hook("webpack:config", (config) => {
        config[0]?.plugins?.push(
          new VuetifyPlugin({
            autoImport: true,
            styles: { configFile: "assets/vars.scss" },
          })
        );
      });
    },
  ],

  app: {
    head: {
      title: "Nuxt3 + Vuetify3 + Webpack5",
      link: [
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "canonical",
          href: url,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },

  pwa: {
    meta: {
      name: title,
      author: "Behon Baker",
      theme_color: "#3b82f6",
      description: description,
    },
    manifest: {
      name: title,
      short_name: shortTitle,
      theme_color: "#3b82f6",
      description: description,
    },
  },
});
