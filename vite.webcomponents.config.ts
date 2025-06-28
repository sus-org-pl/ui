import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import packageJson from "./package.json";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "__SUS_WEB_COMPONENTS",
      formats: ["es"],
      fileName: () => `web-components-v${packageJson.version}.js`,
    },
    rollupOptions: {
      external: ["$app/navigation"]
    },
    outDir: "./web-components-build",
    emptyOutDir: true,
    sourcemap: false,
  },
});
