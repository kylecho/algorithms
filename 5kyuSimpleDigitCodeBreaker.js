// Clever
var tryCode = (function() {
  var guess = [5, 5, 5];
  return function(indication) {
    guess = indication ? guess.map(function(d, i) { return d + indication[i]; }) : guess;
    return guess;
  }
})();
