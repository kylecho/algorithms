// Clever
function fibonacci(n) {
	if (n <= 0) return [];
	if (n == 1) return [0];
	if (n == 2) return [0,1];
	var res = fibonacci(n-1);
	res.push(res[res.length-1] + res[res.lengt-2]);
	return res;
}
