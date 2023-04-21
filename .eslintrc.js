module.exports = [
  {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "react-hooks",
      "i18next",
    ],
    rules: {
      "semi": [2, "always"],
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      "indent": [2, 2],
      "react/jsx-filename-extension": [
        2,
        {
          extensions: [".js", ".jsx", ".tsx"],
        },
      ],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "warn",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "no-shadow": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: true,
          ignoreAttribute: ["data-testid", "to"],
        },
      ],
      "max-len": [
        "error",
        {
          ignoreComments: true,
          code: 150,
        },
      ],
      "jsx-a11y/no-static-element-interactions": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-param-reassign": "off",
      "react/display-name": "off",
      "no-undef": "off",
    },
    globals: {
      __IS_DEV__: true,
      __API__: true,
      __PROJECT__: true,
    },
    overrides: [
      {
        files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
        rules: {
          "i18next/no-literal-string": "off",
          "max-len": "off",
        },
      },
    ],
  },
];
