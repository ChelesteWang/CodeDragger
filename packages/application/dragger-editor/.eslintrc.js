const prettierrc = require('rc')('./prettier')

module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'prettier/prettier': ['off', prettierrc]
  }
}
