var Q = require('q')

var Extra = {
  flatten: function (x) {
    return x.reduce(function (a, b) {
      return a.concat(b);
    }, []);
  },

  map: function (list, f) {
    return Q.all(list.map(f));
  },

  flatMap: function (list, f) {
    return Extra.map(list, f).then(Extra.flatten);
  }
}

module.exports = Extra
