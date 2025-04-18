// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Only if using React

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Fixes delayed CSS reloads on some systems
    },
  },
});
