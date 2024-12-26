import path, { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import alias from "@rollup/plugin-alias";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@react-datepicker/ui",
      fileName: "react-datepicker-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.json" }),
    alias({
      entries: [
        { find: "@/utils", replacement: path.resolve(__dirname, "src/utils") },
        {
          find: "@/components",
          replacement: path.resolve(__dirname, "src/components"),
        },
        {
          find: "@/useDateRange",
          replacement: path.resolve(__dirname, "src/useDateRange"),
        },
        {
          find: "@/useDateRange",
          replacement: path.resolve(__dirname, "src/useDateRange"),
        },
        {
          find: "@/types",
          replacement: path.resolve(__dirname, "src/types"),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
