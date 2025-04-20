import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  plugins: [nodeResolve(), typescript()],
  input: "src/index.ts",
  output: {
    plugins: [terser()],
    dir: "dist",
    format: "iife",
    sourcemap: true,
    globals: {
      console: "console", // Map the external 'console' module to the browser's global 'console'
      process: "process", // Map the external 'process' module to the browser's global 'process'
    },
  },
};
