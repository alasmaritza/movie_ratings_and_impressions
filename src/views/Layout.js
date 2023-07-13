var m = require("mithril");

module.exports = {
  view: function(vnode) {
    return m("main.layout", [
      m("nav.menu", [
        m(m.route.Link, { href: "/list" }, "Home"),
        m(m.route.Link, { href: "/about" }, "About"),
      ]),
      m("section", vnode.children),
      m("footer", [
        m("a", { href: "https://linkedin.com/in/maritza-alas" }, "LinkedIn"),
        m("a", { href: "https://github.com/alasmaritza" }, "Github"),
        m("a", { href: "https://github.com/alasmaritza" }, "Project Repo")
      ])
    ])
  }
}