const assert = require('assert')
const html = require('bel')

// create a circular avatar
// (obj?) -> obj
module.exports = function (opts) {
  opts = opts || {}

  const src = opts.src || ''
  const cls = opts.class || ''
  const size = opts.size || 3
  const radius = opts.radius || 100

  assert.equal(typeof opts, 'object', 'base-elements/avatar: opts should be an object')
  assert.equal(typeof src, 'string', 'base-elements/avatar: src should be a string')
  assert.equal(typeof cls, 'string', 'base-elements/avatar: cls should be a string')
  assert.equal(typeof size, 'number', 'base-elements/avatar: size should be a number')
  assert.ok(size >= 1 && size <= 5, 'base-elements/avatar: size should be >= 1 && <= 5')
  assert.ok(radius >= 0 && size <= 4, 'base-elements/avatar: radius should be >= 0 && <= 4')

  const clx = 'w' + size + ' ' + 'br' + radius + '' + cls

  return html`<img src=${src} class=${clx}></img>`
}
