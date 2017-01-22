var assert = require('assert')
var css = require('sheetify')

css('balloon-css/balloon.min.css')

// create a tooltip
// (str, obj?, obj?) -> obj
module.exports = function (text, opts, child) {
  if (!child) {
    child = opts
    opts = {}
  }

  assert.equal(typeof text, 'string', 'base-elements/tooltip: text should be a string')
  assert.equal(typeof opts, 'object', 'base-elements/tooltip: opts should be an object')
  assert.ok(child, 'base-elements/tooltip: child should exist')

  var cls = opts.class || ''
  var pos = opts.position || 'up'

  assert.equal(typeof cls, 'string', 'base-elements/tooltip: cls should be a string')
  assert.equal(typeof pos, 'string', 'base-elements/tooltip: pos should be a string')

  child.setAttribute('data-balloon', text)
  child.setAttribute('data-balloon-pos', pos)
  return child
}
