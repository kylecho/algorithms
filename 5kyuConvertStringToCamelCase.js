// My solution
function toCamelCase(str){
  var words = (str.indexOf('-') > -1) ? str.split('-') : str.split('_');
  for (var i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}

// Best practices
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
