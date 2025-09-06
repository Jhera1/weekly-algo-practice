// In mathematics, a factorial of a non-negative integer
// n, denoted as n!, is the product of all positive 
// integers less than or equal to n. For example,
//  5! = 5 × 4 × 3 × 2 × 1 = 120. By definition,
//  the factorial of 0 (0!) is 1. Factorials are commonly
//  used in combinatorics to count permutations,
//  which are the number of different ways to arrange
//  a set of distinct objects.


// Prompt: Write a function that takes a non-negative 
// integer and returns its factorial.

const factoralOfNum = num => {
    let result = 1
    for (let i = num; i >= 1; i--) {
    result = result * i    
    }
    return result
}
// console.log(factoralOfNum(10))

// Extension: Modify the function to handle large numbers
// by using memoization to improve efficiency.

function memoize(fn) {
    var cache = {}; // cache object

    return function() {
        // Convert arguments to a key
        var key = Array.prototype.join.call(arguments, ',');
        if (cache.hasOwnProperty(key)) {
            return cache[key]; // return cached result
        }

        var result = fn.apply(this, arguments); // call original function
        cache[key] = result;                     // store in cache
        return result;
    };
}
function factorialOfNum(num) {
    var result = 1;
    for (var i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}
console.log(factorialOfNum(5))
