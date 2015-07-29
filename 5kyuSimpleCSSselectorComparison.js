// My solution
function compare(a,b){
  var aIds = a.match(/\#\w+/gi) || [];
  var bIds = b.match(/\#\w+/gi) || [];
  var aClasses = a.match(/\.\w+/gi) || [];
  var bClasses = b.match(/\.\w+/gi) || [];
  var aTags = a.match(/\w+/gi) || [];
  var bTags = b.match(/\w+/gi) || [];

  if (aIds.length > bIds.length) {
    return a;
  } else if (bIds.length > aIds.length) {
    return b;
  } else if (aClasses.length > bClasses.length) {
    return a;
  } else if (aTags.length > bTags.length) {
    return a;
  } else {
    return (aIds.length + aClasses.length + aTags.length >
            bIds.length + bClasses.length + bTags.length) ?
            a : b;
  }
}


// Clever
function compare(a,b){
  function d(h,c){ return c ? (c.match(h) || []).length : d(h,b) - d(h,a)}
  return (d(/#/g) || d(/\./g) || d(/(^| )\w/g)) < 0 ? a : b;
}


// Best practices
function compare(a,b){
  var tokens, exp = /(#\w+)|(\.\w+)|(\w+)/g;
  var i, precedence = [0, 0, 0];
  while (tokens = exp.exec(a)) 
    precedence = precedence.map(function (value, i) { return value + !!tokens[i + 1] });
  while (tokens = exp.exec(b))
    precedence = precedence.map(function (value, i) { return value - !!tokens[i + 1] });
  for (i = 0; i < 3; i++) {
    if (precedence[i] > 0) return a;
    if (precedence[i] < 0) return b;
  } 
  return b;
}
