//weekly algo practice #9

//Prompt: Write a function that takes a non-negative integer and returns its factorial.
//Extension: Modify the function to handle large numbers by using memoization to improve efficiency.

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;  
//     }
//     return n * factorial(n - 1);  
//   }
// console.log (factorial(17));

// weekly algo practice #10

//Prompt: Write a function that takes a number n and returns the first n numbers in the Fibonacci sequence.
//Extension: Modify the function to return the Fibonacci sequence as a comma-separated string.


function fibonacciSequence(n) {
  if (n <= 0) {
    return [];
  }
  
  // Start the sequence with the first two Fibonacci numbers
  const sequence = [0, 1];
  
  // Generate the rest of the sequence up to n elements
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence.slice(0, n); // Ensure only n numbers are returned
}