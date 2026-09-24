import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    ignores: ["**/*.config.js", "!**/eslint.config.js", "/node_modules"],
    files: ["./src/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-console": "warn",
      camelcase: "error",
    },
  },
  eslintConfigPrettier,
]);
