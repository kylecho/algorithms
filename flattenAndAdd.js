/**
 * Eloquent JavaScript Chapter. 5 Exercise 1: FLATTENING
 * http://eloquentjavascript.net/05_higher_order.html
 * 
 * Use the reduce method in combination with the concat method to "flatten"
 * an array of arrays into a single array that has all the elements of the
 * input arrays.
 *
 * My Modofication: Add all the numbers in the "flatten" array.
 */

var arrays = [[1, 2, 3], [4, 5], [6]];

function flattenAndAdd(array) {
	// Concat
	var myArr = array.reduce(function(a, b) {
		return a.concat(b);
	});

	// Add
	var result = myArr.reduce(function(a, b) {
		return a + b;
	});

	return result;
}

flattenAndAdd(arrays);
// -> 21