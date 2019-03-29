# eslint-config-fw-react
Fastwork linter rule configuration for React

## This linter rules is working for Typescript only.

Installation

First, Install peer dependencies
```
yarn add eslint eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/react @types/react-dom eslint-config-airbnb eslint-config-prettier eslint-plugin-import -D
```

Second, Install the package by following below
```
yarn add @fastwork/eslint-config-react-typescript -D
```

After that, Go to `.eslintrc.js` or `.eslintrc` file.
And then, Puts script on the `extends` key like this
```js
  "extends": "@fastwork/eslint-config-react-typescript"
```
8. After that, Go to the VSCode setting (workspace/user) setting file and put the configuration into the setting file.
```json
{
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```
These configuration will tell the VSCode that you should enable and show validation to the codebase and also fix the code after saving file.

## Please contribute to make it great for all of us.
