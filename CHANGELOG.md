# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.13.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/esbuild-plugin-browserslist-v0.12.1...esbuild-plugin-browserslist-v0.13.0) (2024-07-02)


### ⚠ BREAKING CHANGES

* **deps:** support esbuild 0.22

### Features

* **deps:** support esbuild 0.22 ([e51e017](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/e51e01742216ede5e2dbc6d285862bc79497c8e2))

## [0.12.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/esbuild-plugin-browserslist-v0.12.0...esbuild-plugin-browserslist-v0.12.1) (2024-06-04)


### Bug Fixes

* **deps:** bump the all group with 4 updates ([#190](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/190)) ([a5380a6](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/a5380a67936c0fc03749b13eafea215113e60cf1))

## [0.12.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/esbuild-plugin-browserslist-v0.11.1...esbuild-plugin-browserslist-v0.12.0) (2024-05-22)


### ⚠ BREAKING CHANGES

* **deps:** esbuild v0.20.x

### Features

* **deps:** support esbuild v0.20.x and update deps ([#187](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/187)) ([7b33f9b](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/7b33f9be3d5b64173d237f012e01a1d7bb292c47))

## [0.11.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/esbuild-plugin-browserslist-v0.11.0...esbuild-plugin-browserslist-v0.11.1) (2024-01-28)


### Bug Fixes

* **ci:** add missing corepack publish step ([1743942](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/1743942b08e2787800a480e7a916f49d257802f6))

## [0.11.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/esbuild-plugin-browserslist-v0.10.0...esbuild-plugin-browserslist-v0.11.0) (2024-01-28)


### ⚠ BREAKING CHANGES

* **deps:** esbuild v0.20.x is a pre-1.0 minor version bump, which signifies breaking changes: https://github.com/evanw/esbuild/releases/tag/v0.20.0

### Miscellaneous Chores

* **deps:** bump the all group with 10 updates ([#163](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/163)) ([20d6167](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/20d6167782f2a1ce861fccee9d82526512d0efb2))

## [0.10.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.9.1...v0.10.0) (2023-10-23)


### ⚠ BREAKING CHANGES

* Drops support for EoL Node 14 and 16

### Miscellaneous Chores

* use node 20 (LTS) & drop 14, 16 ([#142](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/142)) ([9021334](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/9021334783bb5b716ca1af1e640bb809cfaebb4d))

## [0.9.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.9.0...v0.9.1) (2023-10-05)


### Bug Fixes

* **deps-security:** bump zod from 3.22.2 to 3.22.3 ([#137](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/137)) ([6b984e8](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/6b984e8737726128afa7fbff09ccc55714a96702))

## [0.9.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.8.1...v0.9.0) (2023-08-17)


### ⚠ BREAKING CHANGES

* **peer-deps:** This is the same breaking change as v0.8.0 and a fix for that release specifying the wrong peer dependency, but will make this install fail for users of esbuild <0.19.2.

### Bug Fixes

* **peer-deps:** upgrade `esbuild` peer dep to new major version ~19 ([#125](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/125)) ([98d334a](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/98d334a59591412dca40ba929d2aa8dddf698b51))

### [0.8.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.8.0...v0.8.1) (2023-07-05)

## [0.8.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.7.2...v0.8.0) (2023-06-14)

### ⚠ BREAKING CHANGES

- **deps:** peerDep esbuild@~0.18.x. This is a breaking change
  as pre-v1 semver-minor versions of esbuild are not backwards compatible.

- **deps:** update all incl. esbuild@~0.18.x ([#102](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/102)) ([626416b](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/626416b9a10913d6bc712c46db239771fb691bc7))

### [0.7.2](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.7.1...v0.7.2) (2023-05-31)

### [0.7.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.7.0...v0.7.1) (2023-05-31)

## [0.7.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.6.0...v0.7.0) (2023-01-31)

### ⚠ BREAKING CHANGES

- **deps:** peerDep esbuild@~0.17.x. This is a breaking change
  as pre-v1 semver-minor versions of esbuild are not backwards compatible.

- **deps:** update all incl. esbuild@~0.17.x ([037e01b](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/037e01bc49a08d38ed0837f0ccb886dc4d73cd24))

## [0.6.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.5.3...v0.6.0) (2022-12-07)

### ⚠ BREAKING CHANGES

- **deps:** esbuild v0.16.x upgrade

Co-authored-by: GitHub Actions <actions@github.com>

- **deps:** update all 🚀 ([#75](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/75)) ([ec7b2ab](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/ec7b2aba90be6c56389285f2e40b74a4fe3e5bf9))

### [0.5.3](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.5.2...v0.5.3) (2022-12-06)

### Features

- add support for new "opera" and "ie" esbuild targets ([#74](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/74)) ([c4720bc](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/c4720bc18a38835dd14ac4d26ab617f471fb2b2f))

### [0.5.2](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.5.1...v0.5.2) (2022-10-26)

### [0.5.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.5.0...v0.5.1) (2022-10-10)

## [0.5.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.13...v0.5.0) (2022-08-23)

### ⚠ BREAKING CHANGES

- Drops support for EOL Node 12. v16 LTS is recommended

### Bug Fixes

- update correct lockfile ([fcbdd67](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/fcbdd674c5c537fec5a028f8531ecd98cca7d37b))

- drop support for node@12 ([88b66cb](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/88b66cb8c26fdd6d988e5631581099ed7b35685e))

### [0.4.13](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.12...v0.4.13) (2022-08-03)

### [0.4.12](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.11...v0.4.12) (2022-06-29)

### [0.4.11](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.10...v0.4.11) (2022-06-14)

### [0.4.10](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.9...v0.4.10) (2022-06-02)

### [0.4.9](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.8...v0.4.9) (2022-04-07)

### [0.4.8](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.7...v0.4.8) (2022-03-23)

### Bug Fixes

- missing comma ([3da5970](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/3da59704d1d0c03df362b0d1f4471d8c02be89ae))

### [0.4.7](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.6...v0.4.7) (2022-03-23)

### [0.4.6](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.5...v0.4.6) (2022-03-09)

### [0.4.5](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.4...v0.4.5) (2022-03-02)

### [0.4.4](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.3...v0.4.4) (2022-02-23)

### [0.4.3](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.2...v0.4.3) (2022-01-26)

### [0.4.2](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.1...v0.4.2) (2022-01-19)

### [0.4.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.4.0...v0.4.1) (2022-01-05)

## [0.3.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.2.1...v0.3.0) (2021-10-18)

### ⚠ BREAKING CHANGES

- esbuild v0.13 peer dependency upgrade

- upgrade esbuild ([b89b379](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/b89b3792b21eff7db8ec573f035bda28ad7f656f))

### [0.2.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.2.0...v0.2.1) (2021-08-13)

## [0.2.0](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.1.1...v0.2.0) (2021-08-08)

### ⚠ BREAKING CHANGES

- **deps:** esbuild v0.12 peer dependency upgrade

Co-authored-by: Nihal Gonsalves <nihal@nihalgonsalves.com>

- **deps:** upgrade esbuild ([#4](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/issues/4)) ([2f06303](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/2f06303225baa3352e6c6fe22eb116120b14ca91))

### [0.1.1](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/compare/v0.1.0...v0.1.1) (2021-08-08)

## 0.1.0 (2021-04-28)

### Features

- add browserlist-to-esbuild mapping ([0e0c383](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/0e0c38314593c31332811860aa4a25c683ed2593))
- add resolveToEsbuildTarget ([48b9930](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/48b9930d787e807bae1524e17a0fce90a3516bdf))
- add target-applying esbuild plugin ([8f8acca](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/8f8acca2826d4f9adef6fcdffc236454047908f7))
- expose resolveToEsbuildTarget ([f32bdba](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/f32bdba8f752abffa6c6a63d0d477f6918598839))
- throw an error if no targets can be resolved ([f77f911](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/commit/f77f9116a93598073a6fb0d500598bdae1f70cdb))
