// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
//   pluginReact.configs.flat.recommended,
// ]);

import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      /* --- General readability rules --- */
      "quotes": ["error", "double", { avoidEscape: true }], // enforce double quotes
      "semi": ["error", "always"], // require semicolons
      "array-bracket-spacing": ["error", "never"], // no spaces inside [ ]
      "comma-dangle": ["error", "always-multiline"], // trailing commas for multiline
      "no-multiple-empty-lines": ["error", { max: 3, maxEOF: 0 }], // reduce vertical clutter
      "eol-last": ["error", "always"], // file must end with a newline
      // "keyword-spacing": ["error", { before: true, after: true }], // if ( true ) => if (true)
      "space-before-blocks": ["error", "always"], // function () { not function (){
      "curly": ["error", "all"], // require braces even for single-line if/else

      /* --- Naming & clarity --- */
      "camelcase": ["warn", { properties: "always" }], // enforce camelCase
      "no-underscore-dangle": "off", // allow _id (common in APIs)

      /* --- Readability over cleverness --- */
      "max-depth": ["warn", 4], // limit nesting depth
      "max-params": ["warn", 4], // too many params hurts readability
      "react/prop-types": "warn", // require prop validation with PropTypes
      "react/require-default-props": ["warn", { ignoreFunctionalComponents: true }],
      "react/no-unused-prop-types": "warn", // catch unused props
      "react/default-props-match-prop-types": "warn", // defaultProps must match prop types
      "react/forbid-prop-types": ["warn", { forbid: ["any"] }], // discourage overly generic "any"
    },
  },

  // React specific recommendations
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
      "react/jsx-max-props-per-line": ["warn", { maximum: 1, when: "multiline" }],
      "react/self-closing-comp": "error", // <Component /> instead of <Component></Component>
      "react/jsx-boolean-value": ["error", "never"], // <Button disabled /> not <Button disabled={true}>
    },
  },
]);
