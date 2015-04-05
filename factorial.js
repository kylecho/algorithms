// Factorial - calculating factorial using recursion
function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}
