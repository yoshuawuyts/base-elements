const css = require('sheetify')
const assert = require('assert')
const html = require('bel')

const prefix = css`
  :host::-webkit-progress-bar { background-color: rgba(0, 0, 0, .125); }
  :host::-webkit-progress-value { background-color: currentcolor; }
  :host::-moz-progress-bar { background-color: currentcolor; }
  :host.reverse {
    direction: rtl;
  }
`

// create a progress bar
// (num, obj?) -> html
module.exports = function (value, opts) {
  opts = opts || {}

  const cls = opts.class || ''
  const direction = opts.reverse

  assert.equal(typeof value, 'number', 'base-elements/progress: value should be a number')
  assert.ok(value >= 0 && value <= 1, 'base-elements/progress: value should be >= 0 && <= 1')
  assert.equal(typeof opts, 'object', 'base-elements/progress: opts should be an object')
  assert.equal(typeof cls, 'string', 'base-elements/progress: opts.class should be a string')

  const directionClass = (direction) ? ('reverse') : ''

  // TODO(yw): patch sheetify so we can create global styles, inline
  const classStyle = 'w-100 db bn input-reset br-100 h1 ' + cls + ' ' + prefix + ' ' + directionClass

  return html`
      <progress class=${classStyle} value=${value}></progress>
  `
}
