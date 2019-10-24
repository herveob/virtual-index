module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      "eslint:recommended",
  ],
  parserOptions: {
      ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
      sourceType: 'module',  // Allows for the use of imports
  },
  rules: {
      // "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/semi": ["error"],
      "indent": [
        "error",
        4
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ]
  }
};