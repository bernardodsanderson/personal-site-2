// import choo's template helper
var html = require("choo/html");

// export module
module.exports = portfolio;

function portfolio(work) {
  let link = '';
  if (work.link) {
    link = html`<a href="${work.link}" class="button button-outline" target="_blank">link</a>`;
  }
  let repo = '';
  if (work.repo) {
    repo = html`<a href="${ work.repo }" class="button button-outline" target="_blank">repo</a>`;
  }
  return html`
    <div class="row">
      <div class="column column-25"><img src="${work.image}" /></div>
      <div class="column">
        <h4>${work.name}</h4>
        ${link}
        ${repo}
        <p>${work.description}</p>
      </div>
    </div>
  `;
}
