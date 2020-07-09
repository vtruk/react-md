# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2](https://github.com/mlaursen/react-md/compare/v2.0.1...v2.0.2) (2020-06-30)

### Bug Fixes

- **LICENSE:** Removed the time range from license since it was incorrect
  ([50c9021](https://github.com/mlaursen/react-md/commit/50c9021cedc0d642758b9fd541bb6c93d2fe1786))
- Added sideEffects field to package.json
  ([31820b9](https://github.com/mlaursen/react-md/commit/31820b9b43705e5849664500a17b6849eb6dc2a9))
- sideEffects formatting
  ([78a7b6b](https://github.com/mlaursen/react-md/commit/78a7b6b0e40c7daefb749835670705f21bd21720))

## v2.0.1

No changes.

## v2.0.0

This is a re-write of the old `Paper` component as well as the paper styles. It
has now been renamed to `elevation` to match the material design specs. This
package no longer includes any styles by default and is a utility package
instead.

### New Behavior and Features

- there are now 24 different types of shadows available instead of 5.
- now exports a mixin for creating performant elevation transitions using the
  `::before`/`::after` opacity trick
- setting the `elevation` to `0` will no longer animate to a different elevation
  on hover

### Breaking Changes

- there is no longer a `Paper` component to add elevation styles

#### New SCSS Variables, Functions, and Mixins

- `@function rmd-elevation` - a new function to get a `box-shadow` string for
  one of the material design elevation values if needing to join multiple
  shadows together
- `@mixin rmd-elevation-transition` - a new mixin to create a performant
  `box-shadow` elevation transition

#### Renamed SCSS Variables, Functions, and Mixins

- renamed `md-box-shadow` to `$rmd-elevation` and now allows for a custom
  `$color` and `$opacity-boost`

#### Removed SCSS Variables Placeholders, and Mixins

- removed `@mixin react-md-papers` since styles are no longer generated by this
  package