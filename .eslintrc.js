module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-undef': ['off', 'allow'],
    'vue/multi-word-component-names': ['off']
  }
}
