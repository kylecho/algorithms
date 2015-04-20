/**
 * 6 kyu Zero fill... for the Queen!
 *
 * Queen of the Forest needs a function that will add a specified quantity of leading zeros to any given number.
 * 
 * For example, if a 5-digit number is needed, and we pass in 11, the returned value would be 00011. There are many ways to
 * achieve this. Let's have one that would be both useful and good performance-wise.
 *
 * NOTES:
 *
 * 1) Numbers passed only - no strings, objects, functions, etc.
 * 2) Whole positives only - negatives converted, decimals dropped (provided in solution setup)
 */

// my solution
function zeroFill(number, size) {
  number = Math.abs(~~number); // whole positive integer
  
  var numToStr = number.toString();
  var numLength = numToStr.length;
  var zerosToAdd = size - numLength;
  var result = '';
  
  function genResult () {
    for (var i = 0; i < zerosToAdd; i++) {
      result += '0';
    }
    result += numToStr;
  }
  genResult();
  return result;
}

// clever
function zeroFill(number, size) {
  return (new Array(size + 1).join(0) + Math.abs(~~number)).slice(-size);
}
