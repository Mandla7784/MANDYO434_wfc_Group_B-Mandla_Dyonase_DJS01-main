import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*index.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
