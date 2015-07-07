// My solution
function validISBN10(isbn) {
  var arr = isbn.toString().split('');
  var firstNineDigits = (1*arr[0])+(2*arr[1])+(3*arr[2])+(4*arr[3])+(5*arr[4])+(6*arr[5])+(7*arr[6])+(8*arr[7])+(9*arr[8]);
  var lastDigit = (arr[9] === 'X') ? (10*10) : (10 * arr[9]); 
  return ((firstNineDigits + lastDigit) % 11 === 0) ? true : false;
}


// Clever
function validISBN10(isbn) {
  var len = isbn.length;
  
  if (len !== 10) {
      return false;
  }
  
  return isbn.split('')
      .map(function (num, index) {
         return (num === 'X' && index === len - 1 ? 10 : parseInt(num, 10)) * (index + 1); 
      })
      .reduceRight(function (a, b) {
          return a + b;
      }, 0) % 11 === 0;
}
