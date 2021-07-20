/**
 * @param {number} n
 * @return {number}
 */
const memoization = (fn) => {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

var climbStairs = function(n) {
    if( n < 3) return n;
    return fib(n-1) + fib(n-2);
};

const fib = memoization(climbStairs);

//result
// 1 = 1
// 2 = 2
// 3 = 3
// 4 = 5
// 5 = 8
// 6 = 13
// 7 = 21

//The result is looking very similar to fibonacci function.
//I used memoization to save result.
//If I have the result already, it will return the saved value.

