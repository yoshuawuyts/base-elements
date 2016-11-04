const mount = require('choo/mount')
const css = require('sheetify')
const html = require('bel')
const base = require('..')

css('tachyons')

const els = [
  el('avatar', base.avatar('http://lorempixel.com/64/64/cats', { alt: 'cool cat pic', size: 3 })),
  el('progress', base.progress(0.75, { class: 'blue', reverse: true })),
  el('tooltip', base.tooltip('Yes, this is Henry', { position: 'right' }, html`<div class="dib pointer">Hop on the hoover!</div>`))
]

const friends = [
  'https://github.com/yoshuawuyts/form-element',
  'https://github.com/shame/modal-element'
]

const nav = html`
  <nav class="flex justify-between justify-end-ns mt3 mh3 pa5 f5 bg-white">
    <a class="ml3-ns black b link" href="https://github.com/yoshuawuyts/base-elements">
      GitHub
    </a>
    <a class="ml3-ns black b link" href="https://npmjs.com/package/base-elements">
      npm
    </a>
    <a class="ml3-ns black b link" href="https://yoshuawuyts.com">
      yosh
    </a>
  </nav>
`
const header = html`
  <header class="bg-white mh3 pa5 pt3 pt6-l">
    <div class="flex flex-column flex-row-l mw8">
      <h1 class="mw6-ns ma0 f1 f-5-m f-6-l">
        base elements
      </h1>
      <h2 class="mw6-ns pa2-l f2 f1-ns">
        A selection of configurable native DOM elements
      </h2>
    </div>
  </header>
`

const friendEls = html`
  <section class="pt5 mw6-ns">
    <h1 class="f1 ma0">
      See Also
    </h1>
    <div class="cf">
      ${friends.map((uri) => html`
        <a href=${uri}
          class="fl w-100 w-50-ns pt4 f3 black link underline">
          ${uri.match(/[\w-]*$/)}
        </a>`
      )}
    </div>
  </section>
`

const footer = html`
  <footer class="mh3 mb3 pt6 pb3 bg-white flex justify-center">
    <p class="b">
      Made in Berlin.
      <span>
        Sponsored by
        <a class="link black" href="http://dat-data.com">
          ${base.tooltip('🐈', html`<span class=pointer> Dat</span>`)}
        </a>
      </span>
    </p>
  </footer>
`

const tree = html`
  <body class="w-100 sans-serif bg-black">
    ${nav}
    ${header}
    <main class="mh3 pt2-l ph5 bg-white">
      <section class="cf">
        ${els}
      </section>
      ${friendEls}
    </main>
    ${footer}
  </body>
`
mount('body', tree)

// create a new el
// (str, obj) -> obj
function el (name, el) {
  return html`
    <section class="fl w-100 w-50-m w-25-l pr4 pt4">
      <h2 class="f3">${name}</h2>
      ${el}
    </section>
  `
}
