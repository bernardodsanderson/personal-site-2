var html = require("choo/html");
var header = require("../components/_header.js");
var footer = require("../components/_footer.js");
var TITLE = "Bernardo Anderson - 404!";

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);
  return html`
    <body class="sans-serif pa3">
      <main class="container">
        ${header()}
        <section>
          <h2>Page not found!</h2>
          <a class="pt2" href="/">Back Home</a>
        </section>
        ${footer()}
      </main>
    </body>
  `;
}
