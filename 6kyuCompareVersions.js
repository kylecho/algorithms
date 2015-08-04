// Best practices
function compareVersions (version1, version2) {
  var version1 = version1.split(".");
  var version2 = version2.split(".");
  var max = [version1.length, version2.length].sort()[1];
  
  console.log(max);
  for(var i = 0; i < max; i++) {
    if(parseInt(version1[i] || 0) < parseInt(version2[i] || 0)) {
      return false;
    }
  }
  
  return true;
}

// Clever
function compareVersions(curr, min) {
  function toNums(v) {
    return v.split('.').map(Number);
  }
  curr = toNums(curr);
  return toNums(min).every(function(mn, i) {
    var cn = curr[i] || 0;
    return mn <= cn;
  });
}
