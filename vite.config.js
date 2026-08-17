import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: "src/public",
  server: { port: 3000, host: "0.0.0.0" },
  build: {
    outDir: "dist",
    minify: "terser",
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true, passes: 2 },
      format: { comments: false },
    },
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          router: ["react-router-dom"],
          helmet: ["react-helmet-async"],
        },
      },
    },
  },
});
