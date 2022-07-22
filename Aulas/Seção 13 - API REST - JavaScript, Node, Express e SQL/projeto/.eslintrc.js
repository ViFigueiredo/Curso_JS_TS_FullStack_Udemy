module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', // permite uso de log
    'class-methods-use-this': 'off', // permite uso de classes sem "this"
    'import/first': 'off', // permite inserir informações antes/depois dos imports
    'eslint-disable max-len': 'true',
  },
};
