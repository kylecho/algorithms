// - n and d will be positive integers, and also n > d.
function factorialDivision(n, d) {
  var x = 1;
  for (var i = 0; i < (n - d); i++) {    
    x *= (n - i);
  }
  return x;
}

// Clever
function factorialDivision(n, d) {
  return n==d && 1 || n * factorialDivision(n-1,d)
}
