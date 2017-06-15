function allanagram (word) {
  if (word.length < 2) {
    return [word]
  } else {
    var allanswers = []
    for (var i = 0; i < word.length; i++) {
      var letter = word[i]
      var shortWord = word.substr(0, i) + word.substr(i + 1, word.length - 1)
      var shortWordArray = allanagram(shortWord)
      for (var j = 0; j < shortWordArray.length; j++) {
        allanswers.push(letter + shortWordArray[j])
      }
    }
    return allanswers
  }
}

allanagram('abc')
