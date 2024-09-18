module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    // Code formatting handled by Prettier
    'no-console': 'warn',
    'prefer-const': 'error',
    complexity: ['error', { max: 10 }],
    'max-lines-per-function': ['warn', { max: 50 }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-magic-numbers': ['error', { ignore: [0, 1] }],
    'prefer-template': 'error',
    'no-var': 'error',
  },
}
