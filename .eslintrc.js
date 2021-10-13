/*
- how to configure eslint: https://eslint.org/docs/user-guide/configuring/
- list of es-lint rules: https://eslint.org/docs/rules/
 */

module.exports = {
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
        shelljs: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'array-callback-return': 'error',
        'no-duplicate-imports': 'warn',
    },
}
