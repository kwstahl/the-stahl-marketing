import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      mozjpeg: {
        quality: 70,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  resolve: {
    alias: {
      "figma:asset": path.resolve(__dirname, "src/assets/figma"),
    },
  },
});