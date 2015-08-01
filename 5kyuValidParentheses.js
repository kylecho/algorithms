// Best practices
// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}

// Clever 1
function validParentheses(parens) {
  var cmp = 0;
  parens.split('').forEach(function(v) {
    cmp += v==='(' ? 1 : -1;
    cmp = Math.abs(cmp);
  });
  return cmp === 0;
}


// Clever 2
function validParentheses(parens){
    var prev;
    while(parens.length) {
        prev = parens;
        parens = parens.replace(/\(\)/g, '');
        if (parens === prev) return false;
    }
    return true;
}
