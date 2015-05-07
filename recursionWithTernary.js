// Recursion created by ternary operator

function yell(n) {
	return n > 0 ? yell(n-1) + "a" : "hiy";
}

function factorial(n) {
	return n > 0 ? n * factorial(n-1) : 1;
}