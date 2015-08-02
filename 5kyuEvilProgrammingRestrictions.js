// Best practices
var anarchy = function () {
  var one = Math.PI / Math.PI;
  var two = one + one;
  var three = two + one;
  return 'I can write numbers like, ' + one + ', ' + two + ', ' + three + '.';
}


// Clever
var anarchy = function () {
  var count = Math.PI-Math.PI;
  return 'I can write numbers like, ' + ++count + ', ' + ++count + ', ' + ++count + '.';
}
