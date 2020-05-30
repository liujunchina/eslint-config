module.exports = {
    "parser": "babel-eslint",
    extends:
        [
            './rules/best-practices.js',
            './rules/errors.js',
            './rules/node.js',
            './rules/style.js',
            './rules/variables.js',
            './rules/es6.js',
            './rules/imports.js'
        ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        strict: 'error'
    }
};
