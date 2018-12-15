var html = require("choo/html");
var header = require("../components/_header.js");
var footer = require("../components/_footer.js");
// Import JSON of porfolio
var portfolioJSON = require("../components/portfolio.json");
// Portfolio component that is looped/mapped through
var portfolio = require("../components/portfolio.js");
// Set title of main page
var TITLE = "Bernardo Anderson";

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);

  return html`
    <body>
      <main class="container">
        ${header()}
        <section id="portfolio">${portfolioJSON.map(portfolio)}</section>
        ${footer()}
      </main>
    </body>
  `;
}
