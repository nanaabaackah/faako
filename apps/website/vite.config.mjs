import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

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
    port: 5173
  },
  build: {
    outDir: "dist"
  }
});
