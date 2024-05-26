module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    //TO DO - ADD WEBPLATFORM HERE
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended-legacy",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["react-hooks", "jsx-a11y", "sonarjs", "prettier", "unused-imports"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error", { trailingComma: "none" }],
    curly: 2,
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "unused-imports/no-unused-vars": "off",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  overrides: [
    {
      files: ["**/*test.*", "**/*stories.*"],
      rules: {
        "sonarjs/no-duplicate-string": 0,
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:sonarjs/recommended-legacy",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      plugins: [
        "react-hooks",
        "jsx-a11y",
        "sonarjs",
        "prettier",
        "@typescript-eslint",
      ],
      parser: "@typescript-eslint/parser",
      rules: {
        "react/prop-types": [0],
        curly: [2, "all"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
