const base = require('..')
const css = require('sheetify')
const html = require('bel')

css('tachyons')

const tree = html`
  <main>
    ${el(base.avatar({ src: 'http://lorempixel.com/64/64/cats', size: 3 }))}
  </main>
`
document.body.appendChild(tree)

function el (name, el) {
  return html`
    <section>
      <h2>${name}</h2>
      ${el}
    </section>
  `
}
