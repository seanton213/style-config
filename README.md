# Welcome to Pacific Transaction's ESLint and Prettier configuration

## Installation
---
We need to install the shared config but also add `eslint` and `prettier` to our `devDependencies`
```
yarn add --dev @pacifictransaction/eslint-config eslint prettier
```

## Usage
`package.json`:

```json
{
    "name": "my-app",
    "eslintConfig": {
        "extends": ["@pacifictransaction/eslint-config"]
    }
}
```

Or `.eslintrc.json`:

```json
{
    "extends": ["@pacifictransaction/eslint-config"]
}
```