# Eslint configuration "Standard" (+Semiestandar) for React

## Description

Some rules with Standard + Semiestandar:

```
const obj = { id: 5, }; // ERROR, "comma-dangle"
const obj = {id: 5}; // ERROR, "object-curly-spacing"
const obj = { id: 5 } // ERROR, "Missing semicolon"
const obj = { id: 5 }; // CORRECT
```

## Full Installation

To install Eslint and its plugins/config (standard, semistandard, import sorts, etc) in a project without Eslint preinstalled (like CRA projects) you should:

`yarn add eslint @babel/core @babel/eslint-parser @babel/preset-react eslint-config-standard eslint-config-react-app eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-import-length eslint-plugin-simple-import-sort --dev`

Otherwise, install:

`yarn add eslint-config-standard eslint-config-semistandard eslint-plugin-node eslint-plugin-promise eslint-plugin-import-length eslint-plugin-simple-import-sort --dev`

## Configuration

Create an `.eslintrc.json` file at the root of your project with:

```
{
  "extends": [
    "eslint:recommended",
    "react-app",
    "react-app/jest",
    "semistandard"
  ],
  "ignorePatterns": [
    "build/*"
  ],
  "plugins": [
    "import",
    "import-length",
    "simple-import-sort"
  ],
  "rules": {
    "import-length/import-length": "error",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-useless-path-segments": "error",
    "import/order": "error",
    "simple-import-sort/imports": "error"
  }
}
```
