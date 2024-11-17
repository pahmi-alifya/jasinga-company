import { coverageConfigDefaults, defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/app/test/setupFiles.ts",
    include: ["**/*.test.{js,ts,jsx,tsx}"],
    coverage: {
      reporter: ["text", "html"],
      exclude: [...coverageConfigDefaults.exclude, "*.config.*"],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // This line is crucial
    },
  },
})
