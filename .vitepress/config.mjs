import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";

import { defineConfig } from "vitepress";
import customPlugin from "./plugins/customPlugins.js";

const site_config = yaml.parse(
  fs.readFileSync(path.join(__dirname, "site.config.yaml"), "utf-8")
);

export default defineConfig({
  title: "復興 CTF ",
  description: "小冊子",
  appearance: true,
  themeConfig: {
    nav: site_config.nav,
    sidebar: site_config.sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(customPlugin.md_container_plugin());
    },
    math: true,
  },
});
