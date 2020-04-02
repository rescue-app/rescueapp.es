module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        'vue/script-indent': ['error', 4, {baseIndent: 0, switchCase: 1}],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-indent': ['error', 4],
        'indent': ["error", 4],
        'vue/html-self-closing': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/attributes-order': 'off'
    },
}
