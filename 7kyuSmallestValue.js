/**
 * 7 kyu: Smallest value of an array
 * 
 * Write a function that can return the smallest value of an array or the index of that value.
 * The function's 2nd parameter will tell whether it should return the value or the index.
 *
 * Assume the first parameter will always be an array filled with at least 1 number and no duplicates.
 * Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
 * 
 * Examples:
 * min([1,2,3,4,5], 'value') // => 1
 * min([1,2,3,4,5], 'index') // => 0
 */

//my solution
function min(arr, toReturn) {
	function compare(a, b) { return a - b; }
	var myArr = arr.slice();
	arr.sort(compare);

	if (toReturn == 'value') {
		return arr[0];
	} else if (toReturn == 'index') {
		return myArr.indexOf(arr[0]);
	}
}

//voted for best practice
function min(arr, toReturn) {
	var val = Math.min.apply(null, arr)
	return toReturn == 'value' ? val : arr.indexOf(val)
}
