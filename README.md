# base-elements [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

A selection of configurable native DOM UI elements. Inspired by
[rebass](https://rebass-beta.now.sh) and
[tachyons](https://github.com/mrmrs/tachyons).

## Usage
```js
const Avatar = require('base-elements/avatar')
const css = require('sheetify')
const html = require('bel')

css('tachyons')

const tree = html`<main>${Avatar()}</main>`
document.body.appendChild(tree)
```

## API
### avatar(src, opts?)
Create a circular avatar image.
`src` is a URL. `opts` can contain:
- __size:__ (default: `3`) set the size of the element. Enums: `{1, 2, 3, 4,
  5}`
- __radius:__ (default: `100`) set the radius of the element. Enums:
  `{0, 1, 2, 3, 4, 100}`
- __class:__ (default: `''`) set additional classes on the element

## progress(value, opts?)
Create a progress bar.
`value` is a number between 0 and 1. `opts` can contain:
- __reverse:__ (default: `'false'`) reverses the progress bar direction
- __class:__ (default: `''`) set additional classes on the element

## tooltip(text, opts, child)
Create a tooltip on a child element from a string. `opts` can contain:
- __position:__ (default: `'up'`) set the position of the tooltip. Enums:
  `{ 'up', 'down', 'left', 'right' }`
- __class:__ (default: `''`) set additional classes on the element

## See Also
- [bel](https://github.com/shama/bel)
- [tachyons](https://github.com/mrmrs/tachyons)
- [rebass](https://rebass-beta.now.sh)
- [awesome-choo](https://github.com/yerkopalma/awesome-choo)
- [awesome-yo-yo](https://github.com/sethvincent/awesome-yo-yo)

## Installation
```sh
$ npm install base-elements
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/base-elements.svg?style=flat-square
[3]: https://npmjs.org/package/base-elements
[4]: https://img.shields.io/travis/yoshuawuyts/base-elements/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/base-elements
[8]: http://img.shields.io/npm/dm/base-elements.svg?style=flat-square
[9]: https://npmjs.org/package/base-elements
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
