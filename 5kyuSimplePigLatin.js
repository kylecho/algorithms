// My solution
function pigIt(str){
  var words = str.split(' ');
  return words.map(function(elem, i){
    return (function(){
      var word = elem.split('');
      var first = word.shift();
      word.push(first);
      word.push('ay');
      return word.join('');
    })();
  }).join(' ');
}

// Clever
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// Second clever
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
