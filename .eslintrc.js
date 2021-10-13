/*
- how to configure eslint: https://eslint.org/docs/user-guide/configuring/
- list of es-lint rules: https://eslint.org/docs/rules/
 */

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
    }
};
