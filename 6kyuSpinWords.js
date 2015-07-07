// my solution
function spinWords(words){
  var myWords = words.split(' ');
  for (var i = 0; i < myWords.length; i++) {
    if (myWords[i].length >= 5) {
      myWords[i] = myWords[i].split('').reverse().join('');
    }
  }
  return myWords.join(' ');
}


// best practices
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}


// clever
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}
