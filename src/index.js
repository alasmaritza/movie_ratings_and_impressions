var m = require("mithril");
var MovieList = require("./views/MovieList");
var About = require("./views/About");
var Layout = require("./views/Layout");
var root = document.body;

m.route(root, "/list", {
  "/list": {
    render: function() {
      return m(Layout, m(MovieList));
    }
  },
  "/about": {
    render: function() {
      return m(Layout, m(About));
    }
  }
})