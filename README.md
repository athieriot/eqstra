# Extra functional methods to Q promises

var Qe = require("eqstra");

## Map

Qe.map([1, 2, 3], function (num) {
    return Q().then(apiCall(num));
})
.then(function (list) {
    doSomethingWhenFinished();
});

## FlatMap

Qe.flatMap([1, 2, 3], function (num) {
    return Q()
    .then(apiCall(num)) // [ "a", "b", "c" ]
})
.then(function (list) {
    doSomethingWhenFinished(); // [ "a", "a", "b", "a", "b", "c"]
});
