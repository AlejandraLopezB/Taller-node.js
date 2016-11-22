function fibo(n) {
	if (n == 0)
		return 0
	if (n == 1)
		return 1; 
	else
		return fibo(n - 2) + fibo(n - 1);
}

function fib(a) {
    if (typeof a != 'number')
        throw new Error('Argument must be number');
    else 
    	if (a < 0)
    		throw new Error('Argument must be greater than zero');
    return fibo(a);
}

module.exports = {
    fib
};