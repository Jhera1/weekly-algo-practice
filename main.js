// weekly algo practice #9

// Prompt: Write a function that takes a non-negative integer and returns its factorial.
// Extension: Modify the function to handle large numbers by using memoization to improve efficiency.

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;  
//     }
//     return n * factorial(n - 1);  
//   }
// console.log (factorial(17));

// weekly algo practice #10

// Prompt: Write a function that takes a number n and returns the first n numbers in the Fibonacci sequence.
// Extension: Modify the function to return the Fibonacci sequence as a comma-separated string.


// function fibonacciSequence(n) {
//   if (n <= 0) {
//     return [];
//   }
  
//   const sequence = [0, 1];
  
//   for (let i = 2; i < n; i++) {
//     sequence.push(sequence[i - 1] + sequence[i - 2]);
//   }
  
//   return sequence.slice(0, n); 
// }

// Weekly algo practice #11

// Prompt: Write a function that takes a string and returns a dictionary with each character as the key and the number of times it appears in the string as the value.
// Extension: Modify the function to ignore spaces and punctuation, and count letters case-insensitively.
// Extension: Modify the function to return the kth most commonly occurring letter. 
// Example: ("Hello, World!", 2) would return the 2nd most common letter in the string. In this case, "o"!

// function charCount(str) {
//     const count = new Map(); 
//     for (let char of str) {
//         if (count.has(char)) {
//             count.set(char, count.get(char) + 1); 
//         } else {
//             count.set(char, 1); 
//         }
//     }
//     return Object.fromEntries(count); 
// }


// const result = charCount("hello world");
// console.log(result);

// or

// const charCountInOrder = (str) => Object.fromEntries(
//     [...str].reduce((map, char) => map.set(char, (map.get(char) || 0) + 1), new Map())
// );


// const result = charCountInOrder("hello world");
// console.log(result);




//weekly algo #12

//Prompt: Write a function that takes a string as input and returns the longest word in the string.
//Extension: Modify the function to return an array of all longest words (in case there are ties).


// const findLongestWord = (str) => {
//     const words = str.split(' '); 
//     console.log(str);
//     console.log(words); 

//     let longestWord = '';  

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word; 
//         }
//     }

//     return longestWord;
// };

// const sentence = "somewhere in time";
// console.log(findLongestWord(sentence)); 

// or

const findLongestWord = (str) => 
    str.split(' ')
    .reduce((longest, word) => 
    word.length > longest.length ? word : longest, '');

const sentence = "Somewhere in time";
console.log(findLongestWord(sentence)); 