module.exports = {
  rules: {
    "max-len": ["error", 120],
    "no-tabs": "off",
    indent: ["error", "tab"],
    semi: ["error", "never"],
    "require-await": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}
