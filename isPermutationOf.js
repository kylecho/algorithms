// check if str1 is permutation of str2
var isPermutationOf = function(str1, str2) {
  var uniqueResults = {};

  var sub = function(permutation, string) {
    if (string === '') { uniqueResults[permutation] = true; }

    for (var i = 0; i < string.length; i++) {
      sub(permutation + string[i], string.slice(0, i) + string.slice(i + 1));
    }
  };
  sub('', str2);
  var permutationsArr = Object.keys(uniqueResults);
  for (var j = 0; j < permutationsArr.length; j++) {
    if (permutationsArr[j] === str1) {
      return true;
    }
  }
  return false;
};
