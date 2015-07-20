// Best pracrtices
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

// My Solution
function solution(string) {
  var result = '';
  var start = 0;
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < string.length; i++) {
    if (uppercase.indexOf(string[i]) > -1) {
      result += string.substring(start, i) + ' ';
      start = i;
    }
    if (!(string[i + 1])) {
      result += string.substring(start, i + 1);
    }
  }
  return result;
}
