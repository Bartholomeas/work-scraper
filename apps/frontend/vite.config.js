import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
});
