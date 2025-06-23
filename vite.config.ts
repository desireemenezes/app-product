import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { defineConfig as defineVitestConfig } from "vitest/config";

export default defineVitestConfig({
  plugins: [react(), compression()],
  esbuild: {
    target: "es2018",
  },
  build: {
    minify: "esbuild",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },
});
