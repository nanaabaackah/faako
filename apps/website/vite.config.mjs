import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const apiProxyTarget = process.env.VITE_API_PROXY_TARGET || "http://127.0.0.1:8888";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@fortawesome/react-fontawesome": fileURLToPath(
        new URL("./src/lib/icons/fontawesomeCompatReact.jsx", import.meta.url),
      ),
      "@fortawesome/free-solid-svg-icons": fileURLToPath(
        new URL("./src/lib/icons/fontawesomeCompatSolid.js", import.meta.url),
      ),
      "@fortawesome/free-brands-svg-icons": fileURLToPath(
        new URL("./src/lib/icons/fontawesomeCompatBrands.js", import.meta.url),
      ),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: apiProxyTarget,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  build: {
    outDir: "dist"
  }
});
