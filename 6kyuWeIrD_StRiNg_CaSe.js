/**
 * 6 kyu: WeIrD StRiNg CaSe
 *
 * Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each
 * word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so
 * the zero-ith index is even, therefore that character should be upper cased.
 *
 * The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are
 * multiple words. Words will be separated by a single space(' ').
 *
 * Examples:
 *
 * toWeirdCase( "String" );//=> returns "StRiNg"
 * toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

// my solution
function toWeirdCase(string){
  var words = string.split(' ');
  var result = '';
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        result += words[i][j].toUpperCase();
      } else {
        result += words[i][j];
      }
    }
    if (words[i+1]) result += ' ';
  }
  return result;
}

// best practice
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
