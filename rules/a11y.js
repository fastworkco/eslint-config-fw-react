module.exports = {
  // Accessibility for disabled people
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/no-static-element-interactions": "off",

  // Using with Link component
  "jsx-a11y/anchor-is-valid": ["error", {
    "components": ["Link" ],
    "specialLink": ["hrefLeft", "hrefRight" ],
    "aspects": ["invalidHref", "preferButton" ]
  }]
}
