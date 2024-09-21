import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import imprt from 'eslint-plugin-import';
import react from 'eslint-plugin-react';


export default tseslint.config(
  { ignores: ['dist'] },
  {
  extends: [js.configs.recommended, ...tseslint.configs.recommended, ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    'react': react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'import': imprt
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project: './tsconfig.app.json',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-duplicate-imports': 'warn',
    'import/exports-last': 'off',
    'import/no-absolute-path': 'error',
    'import/no-relative-packages': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        ignore: ['\\.svg'],
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowObject: true,
        allowArray: true,
        allowArrowFunction: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/routes',
            group: 'object',
          },
          {
            pattern: '@components/**',
            group: 'internal',
          },
        ],
        "newlines-between": 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unknown-property': [
      'warn',
      {
        ignore: [
          'position',
          'args',
          'attach',
          'linecap',
          'linejoin',
          'linewidth',
          'vertexColors',
          'sizeAttenuation',
          'depthWrite',
          'object',
        ],
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/jsx-first-prop-new-line': 'warn',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': ['warn', { forbidDefaultForRequired: true, functions: 'ignore' }],
    'react/jsx-props-no-spreading': ['warn', { html: 'enforce', custom: 'ignore' }],
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        reservedFirst: ['key', 'ref'],
        noSortAlphabetically: true,
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-curly-spacing': [
      'warn',
      {
        allowMultiline: false,
        children: { when: 'always' },
        spacing: { objectLiterals: 'never' },
        when: 'always',
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'prefer-const': ['warn', { destructuring: 'any' }],
    'prefer-destructuring': 'warn',
    'eol-last': 'warn',
    'linebreak-style': ['error', 'unix'],
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'debug', 'info'] }],
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    '@/quotes': ['error', 'double'],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['warn', 'only-multiline'],
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^(temp|_)',
        argsIgnorePattern: '^_',
      },
    ],
    '@/semi': [2],
    '@/indent': ['warn', 2, { SwitchCase: 1 }],
    '@typescript-eslint/array-type': ['warn', { default: 'array', readonly: 'generic' }],
    '@typescript-eslint/member-ordering': [
      'warn',
      { default: ['signature', 'field', 'constructor', 'method'] },
    ],
    '@typescript-eslint/sort-type-constituents': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      { 'ts-ignore': 'allow-with-description', 'ts-nocheck': 'allow-with-description', 'ts-check': 'allow-with-description' },
    ],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    'no-var': 'warn',
    'no-restricted-syntax': 'warn',
  },
});
