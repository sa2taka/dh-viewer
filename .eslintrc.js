module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'typescript-eslint/ban-ts-ignore': 'off',
    'class-methods-use-this': 'off',
  },
};
