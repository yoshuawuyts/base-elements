var assert = require('assert')
var html = require('bel')

function flexStyle (count, direction) {
  return `-webkit-box-flex: ${count}
        -ms-flex: ${count}
            flex: ${count}
  `
}

// (str, str) -> obj
module.exports = function (flex, direction) {
  flex = flex || '1'
  direction = direction || 'row'

  assert.equal(typeof flex, 'string', 'base-elements/spacer: flex should be a string')
  assert.equal(typeof direction, 'string', 'base-elements/spacer: direction should be a string')
  assert.ok(direction === 'row' || direction === 'column', 'base-elements/spacer: direction must be row or column')

  return html`<div class="flex-${direction}" style="${flexStyle(flex, direction)}"></div>`
}
