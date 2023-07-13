var m = require("mithril");
var localData = require("../../data");
var Movie = {
  list: [],
  loadList: function() {
    return Movie.list = localData.movies;
  }
};
module.exports = Movie;