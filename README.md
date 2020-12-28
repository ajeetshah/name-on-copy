# name-on-copy

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fbe805c5752741e9a924a3d759bd84ba)](https://app.codacy.com/gh/ajeetshah/name-on-copy) [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg)](https://github.com/ajeetshah/name-on-copy/blob/main/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ajeetshah/name-on-copy)

Generate new names on copy.

## Installation

```sh
$ npm i name-on-copy

# or

$ yarn add name-on-copy

```

## Usage

```ts
import nameOnCopy from 'name-on-copy'
// or
const nameOnCopy = require('name-on-copy').default

nameOnCopy('hello', ['hello'])
// hellocopy

nameOnCopy('hello', ['hello', 'hellocopy'])
// hellocopy2

nameOnCopy('world', ['hello', 'hellocopy', 'world'])
// worldcopy
```

## API

### Syntax

```ts
nameOnCopy(source, names [, options])
```

### Arguments

| Argument             | Description                                                                                                                                         | Type       | Required?    | Default value |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------ | ------------- |
| `source`             | Name of source i.e. item name being copied                                                                                                          | `string`   | **required** | `''`          |
| `names`              | Array of names existing currently                                                                                                                   | `string[]` | **required** | `[]`          |
| `options.suffix`     | The suffix to be used in the name being generated                                                                                                   | `string`   | optional     | `'copy'`      |
| `options.useSpaces`  | When `true`, a space will be added between `source` and `suffix`. When `false`, no space will be added.                                             | `boolean`  | optional     | `false`       |
| `options.isFileName` | When `true`, `source` will be treated as a **filename** and file extension will be preserved in generated name. E.g. `hello.txt` -> `hellocopy.txt` | `boolean`  | optional     | `false`       |

## [MIT](https://github.com/ajeetshah/name-on-copy/blob/main/LICENSE)
