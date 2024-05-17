/// <reference types="vitest" />
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from 'vite-plugin-vue-devtools';


const INPUT_DIR = "./src";
const OUTPUT_DIR = "./static/dist";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools(),],
  test: {
    include: ["**/__tests__/**"],
    exclude: ["**/node_modules/**", "**/dist/**"],
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(INPUT_DIR),
    },
  },
  root: path.resolve("./src"),
  base: "/static/",
  build: {
    outDir: path.resolve(OUTPUT_DIR),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: {
        main: path.join(INPUT_DIR, "/main.ts"),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
  server: {
    origin: "http://localhost:3000",
    host: "localhost",
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
});
