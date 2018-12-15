require("@fortawesome/fontawesome-free/js/all.js");

const WebFont = require("./assets/webfont.js");

WebFont.load({
  google: {
    families: ['Roboto Mono', 'East Sea Dokdo']
  }
});

const css = require('sheetify');
css("./assets/milligram.min.css");
css("./assets/styles.css");

var choo = require("choo");

var app = choo();
if (process.env.NODE_ENV !== "production") {
  console.log("Not Production");
  app.use(require("choo-devtools")());
} else {
  console.log("Production");
  app.use(require("choo-service-worker")());
}

// app.use(require("./stores/clicks"));

app.route("/", require("./views/main"));
app.route("/blog", require("./views/blog"));
app.route("/*", require("./views/404"));

module.exports = app.mount("body");
