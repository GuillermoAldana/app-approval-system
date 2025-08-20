import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', '.next', 'dist'],
  },
  ...next(),
  ...prettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          printWidth: 100,
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off', // Next.js no necesita importar React
      'react/no-unescaped-entities': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
