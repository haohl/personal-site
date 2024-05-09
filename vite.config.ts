/** @type {import('vite').UserConfig} */
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { createMpaPlugin, createPages } from "vite-plugin-virtual-mpa";
import vue from "@vitejs/plugin-vue";

const pages = createPages([
  {
    name: "resume",
    entry: "/src/pages/resume/index.ts",
    data: {
      title: "Resume",
    },
  },
]);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: '.'
  },
  plugins: [
    vue(),
    createMpaPlugin({
      template: "src/index.html",
      pages,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
