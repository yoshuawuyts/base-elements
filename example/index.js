const mount = require('choo/mount')
const css = require('sheetify')
const html = require('bel')
const base = require('..')

css('tachyons')

const tree = html`
  <body class="w-100 sans-serif bg-black">
    <nav class="flex justify-end mt3 mh3 pa4 bg-white">
      <a class="ml3 black b link" href="https://github.com/yoshuawuyts/base-element">
        GitHub
      </a>
      <a class="ml3 black b link" href="https://npmjs.com/package/base-element">
        npm
      </a>
    </nav>
    <header class="bg-white mh3 pa4 pt6">
      <div class="flex flex-column flex-row-l mw8">
        <h1 class="mw6-ns ma0 f-5 f-6-ns">base elements</h1>
        <h2 class="mw6-ns f2 f1-ns">A selection of configurable native DOM elements</h2>
      </div>
    </header>

    <main class="mh3 pa4 bg-white">
      <div class="mw8">
        ${el('avatar', base.avatar({ src: 'http://lorempixel.com/64/64/cats', size: 3 }))}
      </div>
    </main>
    <footer class="mh3 mb3 pt6 bg-white">
    </footer>
  </body>
`

mount('body', tree)

function el (name, el) {
  return html`
    <section>
      <h2 class="f3">${name}</h2>
      ${el}
    </section>
  `
}
