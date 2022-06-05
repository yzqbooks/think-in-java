import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./nav";
import sidebar from "./sidebar";

export default hopeTheme({
  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "yzqbooks/think-in-java",

  docsDir: "docs",

  locales: {
    "/": {
      // navbar
      navbar: navbar,

      // sidebar
      sidebar: sidebar,
    },
  },
});
