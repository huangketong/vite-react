/*
 * @Author: Ketong
 * @Date: 2021-10-14 11:25:10
 * @LastEditTime: 2021-10-14 13:35:24
 * @LastEditors: Ketong
 * @Description: Description
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react-hooks/rules-of-hooks': OFF,
    'react/no-array-index-key': OFF,
    'react/prefer-stateless-function': OFF,
    'import/named': OFF,
    'no-param-reassign': OFF,
    'react/sort-comp': OFF,
    'no-underscore-dangle': OFF,
    'eslint-comments/disable-enable-pair': OFF,
  },
};
