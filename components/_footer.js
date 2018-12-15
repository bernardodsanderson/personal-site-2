var html = require("choo/html");

module.exports = footer;

function footer(state, emit) {
  return html`
    <section class="copyright">
      <hr />
      <small>© Bernardo Anderson</small>
    </section>
  `;
}
