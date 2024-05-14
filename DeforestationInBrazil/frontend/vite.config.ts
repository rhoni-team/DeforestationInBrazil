/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from 'vite-plugin-vue-devtools';


const env = loadEnv("mode", process.cwd(), "");
const isProduction = env.TARGET_ENV === "production";
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
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  root: path.resolve("./src"),
  base: isProduction ? "" : "/static/",
  build: {
    outDir: path.resolve("./static/dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: {
        main: path.resolve("./src/main.ts"),
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
