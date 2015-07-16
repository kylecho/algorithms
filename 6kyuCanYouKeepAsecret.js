// My solution
function createSecretHolder(secret) {
  
  var secret = secret;

  var obj = {};

  obj.getSecret = function() { return secret; };
  obj.setSecret = function(n) { secret = n; };
 
  return obj;
  
}

// Clever
function createSecretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };
}
