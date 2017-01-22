'use strict'

var component = require('nanocomponent')
var assert = require('assert')
var xtend = require('xtend')
var html = require('bel')

module.exports = modal

function modal (opts) {
  assert.equal(typeof opts, 'object', 'base-elements/modal: opts should be type object')
  assert.equal(typeof opts.render, 'function', 'base-elements/modal: opts.render should be type function')

  opts = xtend(opts)

  var onexit = opts.onexit || noop
  var onunload = opts.onunload
  var onload = opts.onload
  var render = opts.render
  var innerContent = null

  opts.onunload = function () {
    document.body.removeEventListener('mousedown', clickedOutside, false)
    document.body.removeEventListener('keydown', pressedEscape, false)
    innerContent = null
    if (onunload) onunload()
  }

  opts.onload = function () {
    document.body.addEventListener('mousedown', clickedOutside, false)
    document.body.addEventListener('keydown', pressedEscape, false)
    if (onload) onload()
  }

  opts.render = function () {
    var args = []
    for (var i = 0, len = arguments.length; i < len; i++) {
      args[i] = arguments[i]
    }

    innerContent = render.apply(opts.render, args)
    var clx = 'fixed flex items-center justify-center top-0 left-0 ' +
      'h-100 w-100 z-9999'

    return html`
      <div class=${clx}>
        ${innerContent}
      </div>
    `
  }

  return component(opts)

  function clickedOutside (e) {
    var source = e.target
    while (source.parentNode) {
      if (source === innerContent) return
      source = source.parentNode
    }
    onexit()
  }

  function pressedEscape (e) {
    if (e.key !== 'Escape') return onexit()
  }
}

function noop () {}
