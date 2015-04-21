
// The Recipe Cheat Sheet
// apply and call: another way to apply function.
function plus (a, b) {
	return a + b
}

plus(2, 3)
// => 5

plus.call(this, 2, 3)
// => 5

plus.apply(this, [2, 3])
// => 5


// slice: we can use slice on arguments using below.
Array.prototype.slice.call(arguments, 0)
// => returns the arguments in an array.

function butFirst () {
	return Array.prototype.slice.call(arguments, 1)
}

butFirst('a', 'b', 'c', 'd')
// => ['b', 'c', 'd']

// for simplicity and improvement, slice is usually bound to a loca variable.
var __slice = Array.prototype.slice;

function butFirst () {
	return __slice.call(arguments, 1)
}

// or even:
var __slice = Array.prototype.slice;

function slice (list, from, to) {
	return __slice.call(list, from, to)
}

function butFirst () {
	return slice(arguments, 1)
}

// function lengths: Functions have a .length that counts the number of arguments declared.
function (a, b, c) { return }.length
// => 3

