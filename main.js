//weekly algo practice #9

//Prompt: Write a function that takes a non-negative integer and returns its factorial.
//Extension: Modify the function to handle large numbers by using memoization to improve efficiency.

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;  // Base case: 0! = 1 and 1! = 1
    }
    return n * factorial(n - 1);  // Recursive case
  }
console.log (factorial(17));

// weekly algo practice #10

//Prompt: Write a function that takes a number n and returns the first n numbers in the Fibonacci sequence.
//Extension: Modify the function to return the Fibonacci sequence as a comma-separated string.