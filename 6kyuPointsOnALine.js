// Best practices
function onLine(points) {
  if (points.length < 3) return true;
  var x = points.shift();
  var a = undefined;
  return points.
    filter (function(y) { return !(x[0] == y[0] && x[1] == y[1]) }).
    map    (function(y) { return a = (x[0] - y[0])/(x[1] - y[1]) }).
    every  (function(y) { return y == a });
}

// Clever
function onLine(points) {
    var lhs, rhs;   
    var isLinear = true;
    
    for(i=0; i<points.length-2;i++)
    {
        lhs = (points[i+1][1] - points[i][1])*(points[i+2][0] - points[i][0]);
        rhs = (points[i+2][1] - points[i][1])*(points[i+1][0] - points[i][0]);
        if(lhs != rhs)
        {
        isLinear = false;
        break;
        }
    
    }
    
    return isLinear;
}
