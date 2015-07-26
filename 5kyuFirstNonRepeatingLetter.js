// My solution
function firstNonRepeatingLetter(s) {
  
  var currentLetter;
  var loweredS = s.toLowerCase();
  var dupes = [];
  var count = 0;
  var index;
  
  for (var i = 0; i < loweredS.length; i++) {
    currentLetter = loweredS[i];
    for (var j = 0; j < loweredS.length; j++) {
      if (loweredS[i] === loweredS[j]) {
        count++;
      }
    }
    if (dupes.indexOf(loweredS[i]) === -1 && count > 1) {
      dupes.push(loweredS[i]);
    }
    count = 0;
  }

  for (var k = 0; k < s.length; k++) {
    if (dupes.indexOf(s[k].toLowerCase()) !== -1 || dupes.indexOf(s[k].toUpperCase()) !== -1) {
      continue;
    } else {
      return s[k];
    }
  }
  
  return '';
}


// Clever and best practices
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
