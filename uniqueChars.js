// 1.1
// Implement an algorithm to determine if a string has all unique characters.

var uniqueChars = function (str) {
  var hash = {};
  for (var i = 0; i < str.length; i++) {
    hash[str[i]] = true;
  }
  return Object.keys(hash).length === str.length ? true : false;
};
