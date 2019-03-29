module.exports = {
  rules: {
    "import/first": "error",
    "import/order": ["error", {"newlines-between": "always-and-inside-groups"}],
		"sort-imports": "off"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {},
    }
  }
}
