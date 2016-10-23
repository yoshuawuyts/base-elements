const assert = require('assert')
const html = require('bel')

// create a progress bar
// (obj?) -> obj
module.exports = function (opts) {
  opts = opts || {}

  const cls = opts.class || ''
  const value = opts.value || 0
  const clr = opts.color || 'blue'
  const direction = opts.direction || 'ltr'

  assert.equal(typeof opts, 'object', 'base-elements/progress: opts should be an object')
  assert.equal(typeof cls, 'string', 'base-elements/progress: cls should be a string')
  assert.equal(typeof value, 'number', 'base-elements/progress: value should be a number')
  assert.ok(value >= 0 && value <= 1, 'base-elements/progress: value should be >= 0 && <= 1')

  // TODO(yw): patch sheetify so we can create global styles, inline
  const directionStyle = '.bel_progress { direction:' + direction + ' }'
  const classStyle = 'w-100 db bn input-reset br-100 bel_progress h1 ' + clr + ' ' + cls
  const inlineStyle = '.bel_progress::-webkit-progress-bar { background-color: rgba(0, 0, 0, .125); } .bel_progress::-webkit-progress-value { background-color: currentcolor; } .bel_progress::-moz-progress-bar { background-color: currentcolor; }'

  return html`
    <div>
      <style>${inlineStyle + ' ' + directionStyle}</style>
      <progress class=${classStyle} value=${value}></progress>
    </div>
  `
}
