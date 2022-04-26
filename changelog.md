# Changelog
## v1.0.15
### Changed
- :zap: bundle files silently before releasing

## v1.0.14
### Changed
- :adhesive_bandage: version bundled file due to npm not building files when installing the package
- :zap: bundle files with `npm build` before the running release script

## v1.0.13
### Changed
- :green_heart: update build cjs options

## v1.0.12
### Changed
- :green_heart: update build cjs options

## v1.0.11
### Changed
- :bug: update generated source file to default export

## v1.0.10
### Changed
- :bug: generate `.gitignore` file into package

## v1.0.9
### Changed
- :bug: fix generated package entry points

## v1.0.8
### Changed
- :zap: async copy template files

## v1.0.7
### Changed
- :alien: update install script due to `@elieandraos/cli-tools` updates
- :green_heart: Build script supports both node and browser platforms
- :zap: ask for package scope
- :package: update package dependencies

## v1.0.6
### Changed
- :hammer: generated package build platform set to `browser`
- :bug: fix import path in release script

## v1.0.5
### Changed
- :package: bump outdated dependencies

## v1.0.4
### Changed
- :package: bump `@elieandraos/cli-tools` version
- :bug: fix import path in release script

## v1.0.3
### Removed
- :fire: all files and dependencies related to the release script
- :fire: removed microbundle dependency
### Added
- :green_heart: custom build script with esbuild
- :rocket: import release script from `@elieandraos/cli-tools`

## v1.0.2
### Changed
- :lipstick: prettified a number of the scaffolded package files
- :pencil2: fix typo in `.gitignore` file

## v1.0.1
### Added
- :bulb: documentation and readme files
- :rocket: shipped the updated release script to the scaffolded package template too
- :package: update jest and es-lint dependencies
### Changed
- :boom: Removed the npm token usage in the release script
- :wheelchair: The script will ask the user to login to npm if he is not.

## v1.0.0
### Added
A global cli command that scaffolds package files and configures it tools: 

-   :green_heart: compiles with **microbundle**
-   :test_tube: tests with **jest**
-   :rotating_light: lints coding style with **eslint**
-   :lipstick: prettifies code format with **prettier**
-   :twisted_rightwards_arrows: supports environment variables
-   :rocket: releases to gitHub and publishes to npm