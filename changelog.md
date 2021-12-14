# Changelog
## v1.0.4
### Changed
- :package: bump `@elieandraos/cli-tools` version

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