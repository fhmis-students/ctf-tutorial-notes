import DefaultTheme from "vitepress/theme";

import Layout from "./Layout.vue";
import "./style.css";

import customPlugin from "../plugins/customPlugins.js";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(customPlugin.quick_global_register_plugin());
  },
};
