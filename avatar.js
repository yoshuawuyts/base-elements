const assert = require('assert')
const html = require('bel')

// create a circular avatar
// (str, obj?) -> html
module.exports = function (src, opts) {
  opts = opts || {}

  const cls = opts.class || ''
  const size = 'w' + (opts.size || 3) + ' ' + 'h' + (opts.size || 3)
  const radius = 'br' + ((opts.radius)
    ? (opts.radius === 100)
      ? '-100'
      : opts.radius
    : '-100')

  assert.equal(typeof src, 'string', 'base-elements/avatar: src should be a string')
  assert.equal(typeof opts, 'object', 'base-elements/avatar: opts should be an object')
  assert.equal(typeof cls, 'string', 'base-elements/avatar: cls should be a string')
  assert.equal(typeof size, 'string', 'base-elements/avatar: size should be a string')
  assert.equal(typeof radius, 'string', 'base-elements/avatar: radius should be a string')
  assert.ok(size === 'w1 h1' || size === 'w2 h2' || size === 'w3 h3' || size === 'w4 h4' || size === 'w5 h5', 'base-elements/avatar: size should be >= 1 && <= 5')
  assert.ok(radius === 'br-100' || radius === 'br0' || radius === 'br1' || radius === 'br2' || radius === 'br3' || radius === 'br4', 'base-elements/avatar: radius should be >= 0 && <= 4 OR 100')

  const clx = size + ' ' + radius + ' ' + cls

  return html`<img src=${src} class=${clx}></img>`
}
