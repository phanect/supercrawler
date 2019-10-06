module.exports = {
  extends: "eslint:recommended",
  root: true,

  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // "no-var": "error",
    // "prefer-const": "error",
  }
};