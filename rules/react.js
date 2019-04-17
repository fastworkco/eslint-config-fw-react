module.exports = {
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true
  },
  rules: {
    "react/jsx-max-props-per-line": ["error", { maximum: 2, when: "multiline" }],
    "react/prop-types": "off",
    "react/jsx-indent": ["error", "tab"],
    "react/jsx-indent-props": ["error", "tab"],
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".jsx", ".tsx", ".ts", ".js"] }
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8'
    },
  }
}
