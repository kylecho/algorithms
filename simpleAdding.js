/**
 * Have the function simpleAdding(num) add up all the numbers from 1 to num.
 * For the test cases, the parameter num will be any number from 1 to 1000.
 */

function simpleAdding(num) {
	if (num === 1) {
		return 1;
	} else {
		return num + simpleAdding(num - 1);
	}
}
