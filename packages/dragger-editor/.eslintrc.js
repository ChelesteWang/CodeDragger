const prettierrc = require('rc')('./prettier')

module.exports = {
  extends: ['react-app'],
  extends: ['eslint:recommended', 'standard', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'prettier/prettier': ['error', prettierrc]
  }
}
