var html = require("choo/html");

module.exports = footer;

function footer(state, emit) {
  return html`
    <section>
      <div class="beaker">
        <div>This site is p2p friedly! Learn more about it here: <a href="https://beakerbrowser.com" target="_blank">Beaker Browser</a></div>
        <img src="../assets/images/beaker.png" />
      </div>
      <div class="copyright">
        <hr />
        <small>© Bernardo Anderson</small>
      </div>
    </section>
  `;
}
