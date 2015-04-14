/**
 * Your task is to make a function that can take any non-negative integer
 * as a argument and return it with it's digits in descending order.
 * Descending order means that you take the highest digit and place the
 * next highest digit immediately after it.
 *
 * Examples:
 * Input: 145263 Output: 654321
 * Input: 1254859723 Output: 9875543221
 */

function descendingOrder(n) {
 	var myString = n.toString();
 	var myArray = [];
 	var result;

 	for (var i = 0; i < myString.length; i++) {
 		myArray.push(myString.charAt(i));
 	}

 	myArray.sort(function(a, b) { return b - a; });
 	result = myArray.join('').toString();

 	// + operator placed before a string with numbers converts to number.
 	return +result;
}
