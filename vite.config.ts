import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression(), // habilita gzip e brotli na build
  ],
  esbuild: {
    target: "es2018", // gera bundle moderno para navegadores recentes
  },
  build: {
    minify: "esbuild", // já é padrão, mas pode explicitar
  },
});
