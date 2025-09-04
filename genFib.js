// Prompt: Write a function that takes a number n and
// returns the first n numbers in the Fibonacci sequence.

const genFib = n => {
    let result = []
    for (i = 0; i <= n - 1; i++) {
    if (i === 0) {
        result.push(i)
    } else if (i === 1) { 
        result.push(i)
    } else {
        result.push(result[i - 1] + result[i - 2])
    }
        
    }
    return result
}
console.log(genFib(50).toString())



// Extension: Modify the function to return the 
// Fibonacci sequence as a comma-separated string.