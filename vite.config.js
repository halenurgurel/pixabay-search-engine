import { defineConfig } from "vite";

export default defineConfig({
  base: "/pixabay-search-engine/",
  define: {
    global: "window",
  },
});
