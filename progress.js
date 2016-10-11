const assert = require('assert')
const html = require('bel')

// create a progress bar
// (obj?) -> obj
module.exports = function (opts) {
  opts = opts || {}

  const cls = opts.class || ''
  const value = opts.value || 0
  const clr = opts.color || 'blue'

  assert.equal(typeof opts, 'object', 'base-elements/progress: opts should be an object')
  assert.equal(typeof cls, 'string', 'base-elements/progress: cls should be a string')
  assert.equal(typeof value, 'number', 'base-elements/progress: value should be a number')
  assert.ok(value >= 0 && value <= 1, 'base-elements/progress: value should be >= 0 && <= 1')

  const clx = 'w-100 db bn input-reset br-100 _progress h1 ' + clr + ' ' + cls
  const ilx = '._progress::-webkit-progress-bar { background-color: rgba(0, 0, 0, .125); } ._progress::-webkit-progress-value { background-color: currentcolor; } ._progress::-moz-progress-bar { background-color: currentcolor; }'

  return html`
    <div>
      <style>${ilx}</style>
      <progress class=${clx} value=${value}></progress>
    </div>
  `
}
