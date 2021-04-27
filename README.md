# node-typescript-eslint-template

![build status](https://github.com/nihalgonsalves/node-typescript-eslint-template/workflows/build/badge.svg)
![last commit](https://img.shields.io/github/last-commit/nihalgonsalves/node-typescript-eslint-template)
![license UNLICENSE](https://img.shields.io/github/license/nihalgonsalves/node-typescript-eslint-template?color=brightgreen)

TypeScript template repository with typescript-eslint (airbnb config) and ts-node-dev.

Dependabot keeps the dependencies up to date.

- **Build tool**: yarn (can be replaced with npm: `rm yarn.lock && npm install`)
- **Target Node version**: 14.x (es2020)
- **Structure**: `src/` for TypeScript source files and `build/` for output
- Also includes a default `.editorconfig` with 2-space indents

Scripts:

- `yarn dev` run from source, auto-restarting
- `yarn lint` run eslint
- `yarn lint --fix` run eslint with auto-formatting
- `yarn build` build to JS
- `yarn start` run built JS
- `yarn test` currently does nothing

## additional setup

> ℹ️ This SSH setup is required so that checks can run on dependency PRs. Other pushes by a GitHub Actions token do not trigger workflows.

For the dependency update workflow to work, you must setup a Deploy Key.

- Create an SSH key for the dependency update workflow:
  - To generate a key pair, use `ssh-keygen -t ed25519 -C "actions@github.com"`
  - Copy the public key (starts with `ssh-ed25519 AAAA...`) and add it as a new deploy key (`https://github.com/moia-dev/<your-repo>/settings/keys/new`). Make sure to tick "Allow write access", as the workflow needs to push a new branch with the updates.
  - Copy the private key (starts with `-----BEGIN OPENSSH PRIVATE KEY-----`) and save it as a new secret (`https://github.com/moia-dev/<your-repo>/settings/secrets/actions/new`) called `ACTIONS_DEPLOY_KEY`
  - 🚨 Make sure to delete the keys from your local machine once done

## use with react

1. Modify .eslintrc

   ```diff
   @@ -2,7 +2,8 @@
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"],
      "extends": [
   -    "airbnb-typescript/base",
   +    "airbnb-typescript",
   +    "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
   ```

2. Add missing dependencies

   ```sh
   yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
   ```
