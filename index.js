module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "plugins": ["prettier"],
  "rules": {
    "camelcase": "error",
    "consistent-return": "warn",
    "curly": "error",
    "default-case": "warn",
    "default-param-last": "error",
    "dot-notation": "warn",
    "eqeqeq": "warn",
    "indent": "off",
    "no-console": "off",
    "no-else-return": "warn",
    "no-empty": "error",
    "no-extra-parens": "warn",
    "no-func-assign": "error",
    "no-plusplus": "off",
    "no-shadow": "off",
    "no-unused-vars": "warn",
    "no-useless-catch": "warn",
    "prettier/prettier": [
      "error", 
        {
          "arrowParens": "always",
          "bracketSpacing": true,
          "endOfLine": "auto",
          "printWidth": 100,
          "semi": true,
          "singleQuote": true,
          "trailingComma": "none",
          "useTabs": false,
          "tabWidth": 2
      }],
    "react/prop-types": "off"
  },
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true,
    "es6": true
  }
};
