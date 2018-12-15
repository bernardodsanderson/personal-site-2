// import choo's template helper
var html = require("choo/html");

// export module
module.exports = blog;

function blog(article) {
  return html`
    <div class="row">
      <div class="column column-20">
        <img src="${article.image}">
      </div>
      <div class="column">
        <h4>${article.title}</h4>
        <p>${article.description}</p>
        <a href="${
          article.link
        }" class="button button-outline" target="_blank">link</a>
      </div>
    </div>
  `;
}
