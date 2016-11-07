const assert = require('assert')
const html = require('bel')

// create an input element
// (str, str, obj?) -> html
module.exports = function (label, name, opts) {
  opts = opts || {}

  const type = opts.type || 'text'
  const placeholder = opts.placeholder || ''
  const hideLabel = opts.hideLabel
  const containerCls = opts.containerClass || ''
  const labelCls = opts.labelClass || ''
  const inputCls = opts.inputClass || ''

  assert.equal(typeof label, 'string', 'base-elements/input: label should be a string')
  assert.equal(typeof name, 'string', 'base-elements/input: name should be a string')
  assert.equal(typeof type, 'string', 'base-elements/input: type should be a string')
  assert.equal(typeof placeholder, 'string', 'base-elements/input: placeholder should be a string')

  const hideLabelClass = hideLabel ? 'dn' : ''

  const containerClx = containerCls
  const labelClx = hideLabelClass + '' + labelCls
  const inputClx = inputCls

  return html`
    <div class="${containerClx}" >
      <label for=${name} class="${labelClx}">${label}</label>
      <input name=${name} type=${type} placeholder=${placeholder} class="${inputClx}" />
    </div>
  `
}
