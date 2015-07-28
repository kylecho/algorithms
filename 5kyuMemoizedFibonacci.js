// My solution
var fibonacci = function(n) {  
    function fib(n) {
      if (n === 0 || n === 1) {
        return n;
      } else {
        return fib(n-1) + fib(n-2);
      }
    }
    var cache = {};

    return function() {
      if (n in cache) {
        return cache[n];
      } else {
        return (cache[n] = fib(n));
      }
    }();
};


// Best practices
var fibonacci = (function () {
  var cache = {};
  
  return function(n) {
    
    // Base case
    if(n==0 || n == 1)
        return n;
    
    // Recurse only if necessary
    if(cache[n-2] === undefined)
      cache[n-2] = fibonacci(n-2);
    if(cache[n-1] === undefined)
      cache[n-1] = fibonacci(n-1);
    
    return cache[n-1] + cache[n-2];
  };
})(); // Immediately invoke to create a closure for the cache variable


// Clever
var memo = function(f) {
  var cache = {};
  return function(n) {
    if(!cache[n]) cache[n] = f(n);
    return cache[n];
  }
};
var fibonacci = memo(function(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
});
