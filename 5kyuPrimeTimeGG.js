/**
 * 5 kyu: (Ready for) Prime Time
 *
 * We need prime numbers and we need them now!
 *
 * Write a method that takes a maximum bound and returns all primes starting with 0 up-to and
 * including the maximum bound.
 *
 * For example:
 * 
 * prime(11); 
 * Should return an array that looks like this:
 * [2, 3, 5, 7, 11]
 */

function isPrime(num) {
	
	var prime = true;
	
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			prime = false;
		}
	}
	
	return (num < 2) ? false : prime;
}

function prime(num) {
	
	var primes = [];
	
	for (var i = 1; i <= num; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}

	return primes;
}

// prime(11)
// -> [2, 3, 5, 7, 11]