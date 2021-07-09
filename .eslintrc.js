module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['off', 'always'],
    quotes: ['off', 'double'],
    'comma-dangle': 'off',
    'space-before-function-paren': ['error', 'never'],
  },
};
