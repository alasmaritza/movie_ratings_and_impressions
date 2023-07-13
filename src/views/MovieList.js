var m = require("mithril");
var Movie = require("../models/Movie");
//TODO: implement star rating
module.exports = {
  oninit: Movie.loadList,
  view: function() {
    return m(".container", Movie.list.map(function(movie) {
      return m(".movie-list-item", [
        m(".movie-title", movie.title), 
        m("span.movie-detail", movie.release_year), 
        m("span.movie-detail", "Directed by: " + movie.director), 
        m("hr"), 
        m("span.impression", movie.impression),
        m("span.rating", movie.rating)
      ])
    })
    )}
}