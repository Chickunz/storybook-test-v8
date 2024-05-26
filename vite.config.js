import react from "@vitejs/plugin-react";
import path, { join } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: `../../node_modules/.vite/core`,
  resolve: {
    alias: {
      $dry: path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    ...(process.env.npm_lifecycle_event !== "build-storybook"
      ? [
          dts({
            entryRoot: "src",
            tsConfigFilePath: join(
              __dirname,
              `packages/core`,
              "tsconfig.lib.json"
            ),
            skipDianostics: true
          })
        ]
      : []),
    react(),
    viteTsConfigPaths({
      root: "./"
    })
  ],
  worker: {
    plugins: [
      viteTsConfigPaths({
        root: "./"
      })
    ]
  },
  css: {
    modules: {
      scopeBehaviour: "local",
      generateScopedName: (name) => `core-${name}`
    }
  },
  build: {
    minify: false,
    lib: {
      entry: ["src/index.ts"],
      fileName: "[name]",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-is",
        "react/jsx-runtime",
        /@mui/,
        "os",
        "css-mediaquery",
        "jest-canvas-mock",
        "@testing-library/jest-dom",
        "@testing-library/react",
        "@testing-library/user-event"
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes("node_modules")) {
            return (
              chunkInfo.name.replace("node_modules", "external") +
              ".[format].js"
            );
          }
          return "[name].[format].js";
        }
      }
    }
  },
  test: {
    globals: true,
    minWorkers: 4,
    maxWorkers: 8,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["src,/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: "src/App.test.tsx",
    deps: {
      inline: ["vitest-canvas-mock"]
    },
    coverage: {
      reporter: ["lcov", "text", "html", "clover", "json"],
      reportsDirectory: "./coverage",
      include: ["src/**/*"],
      exclude: [
        "**/setupTests.ts",
        "**/types/**",
        "**/*.snap",
        "**/*.stories.*",
        "**/index.*",
        "**/App.*"
      ]
    }
  }
});
