# mirador-template-plugin

Template for Harvard mps-viewer Mirador plugins.

## Compatibility

This plugin is compatible with **Mirador 4** (React 18/19, MUI 7). It is **not**
backwards compatible with Mirador 3, and upgrading from an older version
contains breaking changes — internal `mirador/dist/...` imports now resolve from
the top-level `mirador` package, components use React function/hook patterns, and
the build/styling stack moved to MUI 7 + Emotion. Pin an earlier release if you
still need Mirador 3 support.

## Requirements

- [NVM](https://github.com/nvm-sh/nvm)

## Setup

1. Run `npm i` to install dependencies
1. Use one of the [NPM scripts](#npm-scripts) to perform the actions described below.

## NPM scripts

The following are some useful scripts can be ran using `npm run <script>`. A full list can be seen in [package.json](./package.json)

| Script  | Description                                                                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `clean` | Removes the `dist` directories                                                                                             |
| `build` | Builds the source files into the `./dist` directory                                                                        |
| `serve` | Spins up the local development server at http://localhost:9000                                                             |
| `test`  | Runs the test suite                                                                                                        |

## Installing in Mirador

The `mirador-template-plugin` requires an instance of Mirador 4. Visit the [Mirador wiki](https://github.com/ProjectMirador/mirador/wiki) to learn how to [create a Mirador 4 plugin](https://github.com/ProjectMirador/mirador/wiki/Creating-a-Mirador-4-Plugin) and for additional information about plugins.

Package you will need to install:

```bash
npm i @harvard-lts/mirador-template-plugin
```

## Contribute
Mirador's development, design, and maintenance is driven by community needs and ongoing feedback and discussion. Join us at our regularly scheduled community calls, on [IIIF slack #mirador](http://bit.ly/iiif-slack), or the [mirador-tech](https://groups.google.com/forum/#!forum/mirador-tech) and [iiif-discuss](https://groups.google.com/forum/#!forum/iiif-discuss) mailing lists. To suggest features, report bugs, and clarify usage, please submit a GitHub issue.

[build-badge]: https://img.shields.io/travis/projectmirador/mirador-template-plugin/master.png?style=flat-square
[build]: https://travis-ci.org/projectmirador/mirador-template-plugin

[npm-badge]: https://img.shields.io/npm/v/mirador-template-plugin.png?style=flat-square
[npm]: https://www.npmjs.org/package/mirador-template-plugin