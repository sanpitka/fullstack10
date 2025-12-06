// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    plugins: {
      jest: require('eslint-plugin-jest'),
    },
    extends: [
      'plugin:jest/recommended',
    ],
    ignores: ['dist/*'],
  },
]);
