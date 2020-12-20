# name-on-copy

Generate new names on copy

## Installation

```
$ npm i name-on-copy

# or

$ yarn add name-on-copy

```

## Usage

```
import nameOnCopy from 'name-on-copy'

nameOnCopy('hello', ['hello'])
// hellocopy

nameOnCopy('hello', ['hello', 'hellocopy'])
// hellocopy2

nameOnCopy('world', ['hello', 'hellocopy', 'world'])
// worldcopy
```

## [MIT](https://github.com/ajeetshah/name-on-copy/blob/main/LICENSE)
