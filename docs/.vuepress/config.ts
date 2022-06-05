import { defineUserConfig } from "vuepress";
import theme from "./theme";

import SearchPlugin from "vuepress2-plugin-full-text-search";
export default defineUserConfig({
  base: "/think-in-java/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "think in java",
      description: "A demo for vuepress-theme-hope",
    },
  },

  theme,
  plugins: [SearchPlugin],
});
