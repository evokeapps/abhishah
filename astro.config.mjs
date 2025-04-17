// @ts-check
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
});
