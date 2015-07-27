// Best practices
function partitionOn(pred, items) {
  var f = items.filter( function(e) { return !pred(e); } ); 
  var t = items.filter(pred); 
  items.length = 0;
  for(var i = 0; i < f.length; i++) { items.push(f[i]); }
  for(var i = 0; i < t.length; i++) { items.push(t[i]); }
  
  return f.length; 
}
