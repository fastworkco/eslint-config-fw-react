module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint-config-airbnb",
    "eslint-config-prettier",
    "./rules/common",
    "./rules/import",
    "./rules/typescript",
    "./rules/react",
    "./rules/prettier",
  ].map(require.resolve),
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {},
}
