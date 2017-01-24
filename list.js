var nanocomponent = require('nanocomponent')
var assert = require('assert')

module.exports = createList

function createList (opts) {
  assert.equal(typeof opts, 'object', 'base-elements/list: opts should be type object')
  assert.equal(typeof opts.render, 'object', 'base-elements/list: opts.render should be type object')

  var onscroll = opts.onscroll || noop
  var margin = opts.margin || 3
  var render = opts.render
  var args = null

  return function list () {
    var _args = []
    for (var i = 0, len = arguments.length; i < len; i++) {
      _args[i] = arguments[i]
    }
    args = _args
  }
}

function noop () {}
