var css = require('sheetify')
var assert = require('assert')
var html = require('bel')

var prefix = css`
  :host::-webkit-progress-bar { background-color: rgba(0, 0, 0, .125); }
  :host::-webkit-progress-value { background-color: currentcolor; }
  :host::-moz-progress-bar { background-color: currentcolor; }
  :host.reverse {
    direction: rtl;
  }
`

module.exports = progressElement

// create a progress bar
// (num, obj?) -> html
function progressElement (value, opts) {
  opts = opts || {}

  var _class = opts.class || ''
  var reverse = opts.reverse

  assert.equal(typeof value, 'number', 'base-elements/progress: value should be a number')
  assert.ok(value >= 0 && value <= 1, 'base-elements/progress: value should be >= 0 && <= 1')
  assert.equal(typeof opts, 'object', 'base-elements/progress: opts should be an object')
  assert.equal(typeof _class, 'string', 'base-elements/progress: opts.class should be a string')

  var directionClass = (reverse) ? ('reverse') : ''
  var classes = 'w-100 db bn input-reset br-100 h1' +
    ' ' + _class +
    ' ' + prefix +
    ' ' + directionClass

  return html`<progress class=${classes} value=${value}></progress>`
}
