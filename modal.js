var Nanocomponent = require('nanocomponent')
var assert = require('assert')
var css = require('sheetify')
var html = require('bel')

var styles = css`
  :host {
    position: fixed;
    display: flex;
    justify-content: items-center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9999;
  }
`

module.exports = Modal

function Modal (opts, render) {
  if (!(this instanceof Modal)) return new Modal(opts, render)

  assert.equal(typeof opts, 'object', 'modal-element: opts should be type object')
  assert.equal(typeof render, 'function', 'modal-element: render should be type function')

  this._handleRender = render
  this._innerContent = null
  this._clx = opts.class
}
Modal.prototype = Object.create(Nanocomponent.prototype)

Modal.prototype._render = function () {
  var len = arguments.length
  var args = new Array(len)
  for (var i = 0; i < len; i++) args[i] = arguments[i]

  this._innerContent = this._handleRender.apply(this, args)
  return html`
    <div class=${styles + ' ' + this._clx}>
      ${this._innerContent}
    </div>
  `
}

Modal.prototype._exit = function noop () {}

Modal.prototype._load = function () {
  document.body.addEventListener('mousedown', this._handleClick, false)
  document.body.addEventListener('keydown', this._handleKeydown, false)
}

Modal.prototype._unload = function () {
  document.body.removeEventListener('mousedown', this._handleClick, false)
  document.body.removeEventListener('keydown', this._handleKeydown, false)
  this._innerContent = null
}

// detect if someone clicked outside the modal or inside it
Modal.prototype._handleClick = function (e) {
  var source = e.target
  while (source.parentNode) {
    if (source === this._innerContent) return
    source = source.parentNode
  }
  this._onexit()
}

Modal.prototype._handleKeydown = function (e) {
  if (e.key === 'Escape') this._onexit()
}
