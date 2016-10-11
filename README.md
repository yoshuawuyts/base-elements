# base-elements [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

A selection of configurable native DOM UI elements.

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
### avatar(opts, children)
Create a circular avatar image. `opts` can contain:
- __src:__ (default: `null`) set the `src` tag of the element
- __size:__ (default: `3`) set the size of the element (uses `.w1 ... .w5`)
- __class:__ (default: `null`) set additional classes on the element

## See Also
- [bel](https://github.com/shama/bel)
- [tachyons](https://github.com/mrmrs/tachyons)
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
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/base-elements/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/base-elements
[8]: http://img.shields.io/npm/dm/base-elements.svg?style=flat-square
[9]: https://npmjs.org/package/base-elements
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
