/**
 * Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.
 * A prime number(or a prime) is a natural number greater than 1 that has no positive divisor other than 1 and itself.
 *
 * Example:
 * isPrime(5)
 * => true
 */

function isPrime(num) {
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}

	return num >= 2;
}