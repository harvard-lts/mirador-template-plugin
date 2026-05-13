# mirador-template-plugin

Template for Harvard mps-viewer Mirador plugins.

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

The `mirador-template-plugin` requires an instance of Mirador 4. Visit the [Mirador wiki](https://github.com/ProjectMirador/mirador/wiki) to learn how to install an existing plugin and for additional information about plugins.

Package you will need to install:

```bash
npm i @harvard-lts/mirador-template-plugin
```

## v4 plugin skeleton

A Mirador 4 plugin is a default-exported object with this shape:

```js
{
  target: 'Window',          // which Mirador component to attach to
  mode: 'add' | 'wrap',      // add alongside, or wrap the target
  component: MyComponent,    // React component (class or functional)
  mapStateToProps,           // optional — Redux state selectors
  mapDispatchToProps,        // optional — Redux action creators
}
```

Two key differences from v3:

1. **Flat imports.** Import Mirador selectors and actions from the package root, not from `mirador/dist/es/src/...`:

   ```js
   import { getManifestoInstance, setCanvas, updateWindow } from 'mirador';
   ```

2. **Peer dependencies.** Mirador, React, `@mui/*`, and `@emotion/*` must live in `peerDependencies` so the host app's copies are used. See this repo's `package.json` for the exact ranges.

Plugin components can be written as either class components or functional components with hooks — see [`src/plugins/MiradorTemplatePlugin.js`](./src/plugins/MiradorTemplatePlugin.js) for both styles.

## Contribute
Mirador's development, design, and maintenance is driven by community needs and ongoing feedback and discussion. Join us at our regularly scheduled community calls, on [IIIF slack #mirador](http://bit.ly/iiif-slack), or the [mirador-tech](https://groups.google.com/forum/#!forum/mirador-tech) and [iiif-discuss](https://groups.google.com/forum/#!forum/iiif-discuss) mailing lists. To suggest features, report bugs, and clarify usage, please submit a GitHub issue.

[build-badge]: https://img.shields.io/travis/projectmirador/mirador-template-plugin/master.png?style=flat-square
[build]: https://travis-ci.org/projectmirador/mirador-template-plugin

[npm-badge]: https://img.shields.io/npm/v/mirador-template-plugin.png?style=flat-square
[npm]: https://www.npmjs.org/package/mirador-template-plugin