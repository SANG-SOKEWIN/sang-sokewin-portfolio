import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Relative paths work from either a GitHub Pages project URL or a custom domain.
  base: "./",
  plugins: [react()],
  build: { outDir: "dist-pages", emptyOutDir: true },
});
