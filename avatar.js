const assert = require('assert')
const html = require('bel')

// create a circular avatar
// (obj?) -> obj
module.exports = function (opts) {
  opts = opts || {}

  const src = opts.src || ''
  const cls = opts.class || ''
  const size = 'w' + (opts.size || 3)
  const radius = 'br' + (opts.radius || '-100')

  assert.equal(typeof opts, 'object', 'base-elements/avatar: opts should be an object')
  assert.equal(typeof src, 'string', 'base-elements/avatar: src should be a string')
  assert.equal(typeof cls, 'string', 'base-elements/avatar: cls should be a string')
  assert.equal(typeof size, 'string', 'base-elements/avatar: size should be a string')
  assert.equal(typeof radius, 'string', 'base-elements/avatar: radius should be a string')
  assert.ok(size === 'w1' || size === 'w1' || size === 'w2' || size === 'w3' || size === 'w4' || size === 'w5', 'base-elements/avatar: size should be >= 1 && <= 5')
  assert.ok(size === 'br-100' || size === 'br0' || size === 'br1' || size === 'br2' || size === 'br3' || size === 'br4', 'base-elements/avatar: size should be >= 1 && <= 5')
  assert.ok(radius >= 0 && size <= 4, 'base-elements/avatar: radius should be >= 0 && <= 4')

  const clx = size + ' ' + radius + ' ' + cls

  return html`<img src=${src} class=${clx}></img>`
}
