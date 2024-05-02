<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const { page, frontmatter } = useData();
const { Layout } = DefaultTheme;

const isDefaultThemeLayout = (layout_value) =>
  [undefined, "page", "doc", "home"].findIndex(
    (layout) => layout === layout_value
  ) > -1;
const isDefaultTheme = (layout_value) =>
  page.value.isNotFound || isDefaultThemeLayout(layout_value);
</script>

<template>
  <Layout v-if="isDefaultTheme(frontmatter.layout)" />
  <div v-else></div>
</template>
