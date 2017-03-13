var assert = require('assert')
var html = require('bel')

// create a toolbar
// (obj) -> obj
module.exports = function (opts) {
  opts = opts || {}
  assert.equal(typeof opts, 'object', 'base-elements/toolbar: opts should be an object')

  var innerContent = opts.innerContent || null
  var cls = opts.class || ''

  assert.equal(typeof cls, 'string', 'base-elements/toolbar: cls should be a string')

  return html`
    <nav class="flex w-100 ${cls}">
      ${innerContent}
    </nav>
  `
}
