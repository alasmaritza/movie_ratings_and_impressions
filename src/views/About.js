var m = require("mithril");

module.exports = {
  view: function() {
    return m(".container-about", [
      m("img.profile-pic.item", {src: "images/profile-pic.png"}),
      m("h1.item", "About"), 
      m("p.text.item","My name is Maritza Alas, and I'm a Software Engineer and movie lover."), 
      m("p.text.item", "I built this app with the JavaScript framework Mithril.js. " + 
        "This is both an exercise in learning a new framework and following through with an idea I’ve had for a while. " + 
        "I’ve never been good at writing, so full-blown reviews are out of the question, instead, I’m providing short impressions a movie has given me."),
      m("p.text.item", [m("span.title", "Why Mithril.js? "), 
        m("span.text", "I was originally introduced to this framework through a former colleague who asked me to provide some css styling to a project he was working on. " + 
          "I found the framework scary and weird and haven’t thought of it until recently, when the same colleague shared another project built with Mithril.js. " + 
          "I tried out the tutorial and found it quite easy to pick up, and although I haven’t seen many job listings requiring Mithril.js, " + 
          "I decided to use it for this project as it has been enjoyable to work with.")
      ]),
      m(".tldr.item", [
        m("span.title", "TLDR: "), 
        m("span.text", "Please hire me.")
      ])
    ])
  }
}