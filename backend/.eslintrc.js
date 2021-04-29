module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb-typescript/base', 'eslint:recommended'],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: '.',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'padding-line-between-statements': [2,
            // Always require blank lines before and after class declaration, if, do/while, switch, try
            { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'] },
            { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'], next: '*' },
            // Always require blank lines before return statements
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
        'no-useless-escape': 'off',
        'no-script-url': 'off',
        'no-template-curly-in-string': 'off',
        'linebreak-style': 0,
        'prefer-template': 'error',
        indent: ['warn', 2],
        'no-console': 'warn',
        'import/prefer-default-export': 'off',
        'object-curly-spacing': ['error', 'always'],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
        'no-underscore-dangle': 0,
        'class-methods-use-this': 0,
    },
};
