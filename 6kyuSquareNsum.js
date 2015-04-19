/**
 * 6 kyu: Square(n) Sum
 *
 * Complete the squareSum method so that it squares each number passed into it and then sums the results together
 * 
 * For example:
 * squareSum([1, 2, 2]); // should return 9
 */

// my solution
function squareSum (numbers) {
	var squared = numbers.map(function(num) { return num * num; });
	return squared.reduce(function(cur, prev) { return cur + prev; });
}

// best practice
function squareSum (numbers) {
	return numbers.reduce(function(sum, n) {
		return (n * n) + sum;
	}, 0);
}
