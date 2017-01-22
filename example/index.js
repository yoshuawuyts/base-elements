var append = require('append-child')
var mount = require('choo/mount')
var css = require('sheetify')
var html = require('bel')
var base = require('..')

css('tachyons')

var els = [
  el('avatar', base.avatar('http://lorempixel.com/64/64/cats', { size: 3 })),
  el('progress', base.progress(0.75, { class: 'blue', reverse: true })),
  el('tooltip', base.tooltip('Not bad huh', { position: 'right' }, html`<div class="dib pointer">Hover me!</div>`)),
  el('modal', createModal())
]

var friends = [
  'https://github.com/yoshuawuyts/form-element',
  'https://github.com/shame/modal-element'
]

var nav = html`
  <nav class="flex justify-between justify-end-ns mt3 mh3 pa5 f5 bg-white">
    <a class="ml3-ns black b link" href="https://github.com/yoshuawuyts/base-elements">
      GitHub
    </a>
    <a class="ml3-ns black b link" href="https://npmjs.com/package/base-elements">
      npm
    </a>
  </nav>
`
var header = html`
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

var friendEls = html`
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

var footer = html`
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

var tree = html`
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

function createModal () {
  var unmount = null

  var modal = base.modal({
    onexit: onexit,
    render: function (name) {
      return html`
        <div class="measure-wide bg-white ba bw2 pa4 tc">
          <h2 class="f2">Check out this sweet modal</h2>
          <p class="b f6">
            Click on the button, press ESC or click outside the modal to close
          </p>
          <button
            onclick=${onexit}
            class="mt4 bn no-underline br1 white bg-blue grow b inline-flex items-center pv2 ph3 pointer">
            Oh yeah neat
          </button>
        </div>
      `
    }
  })

  var triggerModal = html`
    <button
      class="bn no-underline br1 white bg-blue grow b inline-flex items-center pv2 ph3 pointer"
      onclick=${onclick}>
      Toggle modal
    </button>
  `

  return triggerModal

  function onexit (e) {
    unmount()
    unmount = null
  }

  function onclick () {
    unmount = append(modal(), document.body)
  }
}

