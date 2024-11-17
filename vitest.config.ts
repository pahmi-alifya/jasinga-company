import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.test.{js,ts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".next"],
    setupFiles: "./src/app/test/setupFiles.ts",
    coverage: {
      reporter: ["text", "html"],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // This line is crucial
    },
  },
})
