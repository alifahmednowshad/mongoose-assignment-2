import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  configPrettier, // Disables ESLint rules that conflict with Prettier
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'prettier/prettier': 'error', // Add Prettier as an ESLint rule
    },
  },
  {
    ignores: ['**/node_modules/', '**/dist/'],
  }
);
