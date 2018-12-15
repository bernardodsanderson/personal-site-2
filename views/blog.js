var html = require("choo/html");
var header = require("../components/_header.js");
var footer = require("../components/_footer.js");
var blog = require("../components/blog.js");
// Import JSON of blog list
var blogJSON = require("../components/blog.json");
// Set title of main page
var TITLE = "Blog | Bernardo Anderson";

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);

  return html`
    <body>
      <main class="container">
        ${header()}
        <section id="blog">
          <h2>Blog</h2>
          ${blogJSON.map(blog)}
        </section>
        ${footer()}
      </main>
    </body>
  `;
}
