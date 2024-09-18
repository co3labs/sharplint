# SharpLint

![Build Status](https://github.com/username/sharplint/actions/workflows/ci.yml/badge.svg)
![npm version](https://img.shields.io/npm/v/sharplint)
![npm downloads](https://img.shields.io/npm/dt/sharplint)
![license](https://img.shields.io/npm/l/sharplint)

**SharpLint** is an NPM package that ensures consistent code quality across all your projects. It comes pre-configured with:

- **ESLint** for linting
- **Prettier** for formatting
- **Husky** for Git hooks
- **TypeScript** type-checking

This package provides default configurations for these tools, but it also allows for easy customization in each project.

## Installation

Install `sharplint` as a dev dependency in your project:

```bash
npm install sharplint --save-dev
```

## Usage

After installation, add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "sharplint lint",
    "format": "sharplint format",
    "type-check": "sharplint type-check",
    "prepare": "sharplint prepare"
  }
}
```

This gives you access to the following commands:

- `npm run lint`: Lints your TypeScript files using ESLint.
- `npm run format`: Formats your code using Prettier.
- `npm run type-check`: Runs TypeScript type-checking.
- `npm run prepare`: Installs Git hooks using Husky.

## Git Hooks (via Husky)

Husky is configured to automatically run linting and formatting on staged files before committing. The default pre-commit hook ensures code is properly linted and formatted before each commit.

## Default Configurations

The package provides default configurations for ESLint, Prettier, and TypeScript. These configurations are automatically applied when you use the package, but you can override them in your project if needed.

### ESLint

The default ESLint configuration includes rules from:

- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `prettier` (to avoid conflicts between ESLint and Prettier)

#### Default ESLint Rules

Here’s an example of the default ESLint config:

```javascript
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

}
```

### Prettier

The default Prettier configuration enforces consistent code formatting across projects. The configuration includes:

#### Default Prettier Settings

```json
{
  "semi": false,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

### TypeScript

This package includes basic TypeScript settings for type-checking. The default `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "strict": true,
    "rootDir": "./src",
    "outDir": "./bin",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

### Husky & Lint-Staged

By default, Husky is set up to run linting and formatting on staged files before every commit using `lint-staged`. The default setup ensures that files pass through ESLint and Prettier automatically during commits.

Here’s the default `lint-staged` configuration in `package.json`:

```json
{
  "lint-staged": {
    "**/*.ts": ["eslint --fix", "prettier --write", "git add"]
  }
}
```

## Customizing the Configuration

You can override the default configurations provided by this package by adding your own `.eslintrc.js`, `.prettierrc`, or `tsconfig.json` in your project. These custom configurations will extend or replace the defaults.

### Override ESLint Configuration

If you want to add your own custom ESLint rules, create an `.eslintrc.js` file in the root of your project. For example, to turn off `no-console`:

```javascript
module.exports = {
  extends: ['sharplint'],
  rules: {
    'no-console': 'off',
  },
}
```

### Override Prettier Configuration

To customize Prettier settings, create a `.prettierrc` file in the root of your project. For example, to disable semicolons and prefer double quotes:

```json
{
  "semi": true,
  "singleQuote": false
}
```

### Override TypeScript Configuration

To customize TypeScript settings, create a `tsconfig.json` file in the root of your project. For example, to target ES2020 instead of ES6:

```json
{
  "compilerOptions": {
    "target": "ES2020"
  }
}
```

## Using Husky for Custom Git Hooks

You can add or modify Husky hooks by editing the `.husky` folder in your project. For example, if you want to add a custom pre-push hook, you can do:

```bash
npx husky add .husky/pre-push "npm test"
```

## Continuous Integration (CI) Setup

For CI/CD integration (e.g., using GitHub Actions), make sure to install the package and run the relevant scripts during your CI workflow.

Example GitHub Actions workflow:

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'

      - run: npm install
      - run: npm run lint
      - run: npm run format
      - run: npm run type-check
```

## Conclusion

This package is designed to simplify your project setup by providing a consistent quality-checking environment. By using **SharpLint**, you can ensure that all your projects adhere to the same coding standards, while still allowing flexibility to customize configurations as needed.

Feel free to contribute or suggest improvements!

---

### License

Apache 2.0 License.

---

### Contribution

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. We welcome contributions of all kinds!

---

This `README.md` now uses **SharpLint** as the package name and provides clear instructions on how to install, use, and override configurations in external projects.
