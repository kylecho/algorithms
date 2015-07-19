// Best practices
f = function(n, m) {
  sum1toN = function(x) {
    return x * (x + 1) / 2;
  };
  
  return (sum1toN(m - 1)) * (Math.floor(n / m)) + sum1toN(n % m);
};
