module.exports = {
  extends: [
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        usePrettierrc: false,
        singleQuote: true,
        trailingComma: "all",
        semi: false,
        useTabs: true,
        tabWidth: 2
      }
    ]
  }
}
