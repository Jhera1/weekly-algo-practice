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


// function fibonacciSequence(n) {
//   if (n <= 0) {
//     return [];
//   }
  
//   // Start the sequence with the first two Fibonacci numbers
//   const sequence = [0, 1];
  
//   // Generate the rest of the sequence up to n elements
//   for (let i = 2; i < n; i++) {
//     sequence.push(sequence[i - 1] + sequence[i - 2]);
//   }
  
//   return sequence.slice(0, n); // Ensure only n numbers are returned
// }

// Weekly algo practice #11

//Prompt: Write a function that takes a string and returns a dictionary with each character as the key and the number of times it appears in the string as the value.
// Extension: Modify the function to ignore spaces and punctuation, and count letters case-insensitively.
// Extension: Modify the function to return the kth most commonly occurring letter. 
// Example: ("Hello, World!", 2) would return the 2nd most common letter in the string. In this case, "o"!

// function charCount(str) {
//     const count = new Map(); // Create a new Map to store character counts in insertion order
//     for (let char of str) {
//         if (count.has(char)) {
//             count.set(char, count.get(char) + 1); // If char exists, update its count
//         } else {
//             count.set(char, 1); // If char doesn't exist, set count to 1
//         }
//     }
//     return Object.fromEntries(count); // Convert Map back to an object
// }

// // Example usage:
// const result = charCount("hello world");
// console.log(result);

//or

const charCountInOrder = (str) => Object.fromEntries(
    [...str].reduce((map, char) => map.set(char, (map.get(char) || 0) + 1), new Map())
);

// Example usage:
const result = charCountInOrder("hello world");
console.log(result);
