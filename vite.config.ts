import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/utils/variables.scss";
        `
      }
    }
  },
  server: {
    proxy: {
      "/transnextgen": {
        target: "https://transstage1.iwayex.com",
        changeOrigin: true,
        secure: false
      },
    }
  },
}
);
