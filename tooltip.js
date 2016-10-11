const assert = require('assert')
const html = require('bel')

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

  const cls = opts.class || ''

  assert.equal(typeof cls, 'string', 'base-elements/tooltip: cls should be a string')

  const outer = 'position: relative; display: inline-block; cursor: pointer; box-sizing: border-box;'
  const tooltipBox = 'position: absolute; bottom: 100%; left: 50%; font-size: 12px; white-space: nowrap; padding: 4px 8px; border-radius: 2px; transform: translate(-50%, -8px); color: rgb(255, 255, 255); background-color: rgb(17, 17, 17);'
  const inline = '._tooltip_box { display: none } ._tooltip:hover ._tooltip_box { display: block }'
  const arrow = 'position: absolute; top: 100%; left: 50%; border-width: 6px; border-style: solid; border-color: rgb(17, 17, 17) transparent transparent; border-image: initial; transform: translate(-50%, 0px);'

  return html`
    <span
      class="relative dib pointer pa4 _tooltip"
      style=${outer}
      aria-label="Tooltip">
      <style>${inline}</style>
      <div class="_tooltip_box tc" style=${tooltipBox}>
        ${text}
        <div style=${arrow}></div>
      </div>
      ${child}
    </span>`
}
