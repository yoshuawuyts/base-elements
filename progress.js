const assert = require('assert')
const html = require('bel')

// create a progress bar
// (obj?) -> obj
module.exports = function (opts) {
  opts = opts || {}

  const cls = opts.class || ''
  const value = opts.value || 0
  const color = opts.color || 'blue'

  assert.equal(typeof opts, 'object', 'base-elements/progress: opts should be an object')
  assert.equal(typeof cls, 'string', 'base-elements/progress: cls should be a string')
  assert.equal(typeof value, 'number', 'base-elements/progress: value should be a number')
  assert.ok(value >= 0 && value <= 1, 'base-elements/progress: value should be >= 0 && <= 1')

  const clx = 'h1 bg-black-10 ' + color

  return html`
    <div class=${clx}">
      <progress class="w-100 input-reset br-100" value=${value}></progress>
    </div>
  `
}
