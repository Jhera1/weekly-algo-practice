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

// const findLongestWord = (str) => 
//     str.split(' ')
//     .reduce((longest, word) => 
//     word.length > longest.length ? word : longest, '');

// const sentence = "Somewhere in time";
// console.log(findLongestWord(sentence)); 

// weekly algo #13

// Prompt: Write a function that takes an array and
// a number k as input and rotates the
// array to the right by k steps.

// Extension: Modify the function to handle negative
// values of k to rotate the array to the left.


// const rotateRight = (arr, k) => arr.slice(-k % arr.length)
// .concat(arr.slice(0, -k % arr.length));
// console.log(rotateRight([9, 8, 7, 6, 5, 4, 3, 2, 1], 1));


//#14
//Prompt: Write a function filterArray that takes an array and a callback function as input. The function should return a new array containing only the elements that satisfy the condition defined in the callback function.

//Extension: Modify the filterArray function to accept an additional argument that specifies the starting index from which to begin filtering the array.
// const filterArray = (arr, callback) => arr.filter(callback);
// const callback = (num) => num > 2; 
// console.log(filterArray([1, 2, 2, 3, 4, 5], callback)); 
//output should be  [3, 4, 5]

// #15 

// Prompt: Given an array of integers, find the highest product of two unique numbers in the array.
// let highestProductOfTwo = (arr) => 

    // const highestProductOfTwo = (arr) => {
    //     if (arr.length < 2) throw new Error("The Array is hungry for more elements");
      
    //     let [max1, max2, min1, min2] = [-Infinity, -Infinity, Infinity, Infinity];
      
    //     for (const num of arr) {
    //       if (num > max1) [max1, max2] = [num, max1];
    //       else if (num > max2) max2 = num;
      
    //       if (num < min1) [min1, min2] = [num, min1];
    //       else if (num < min2) min2 = num;
    //     } 
      
    //     return Math.max(max1 * max2, min1 * min2);
    //   };
      
    //   // Example Usage
    //   const nums = [-10, -20, 5, 7, 10];
    //   console.log(highestProductOfTwo(nums)); // Output: 200
      

    const highestProductOfTwo = (arr) => {
        if (arr.length < 2) throw new Error("The Array is hungry for more elements");
      
        arr.sort((a, b) => a - b);
        const n = arr.length;
      
        return Math.max(arr[n - 1] * arr[n - 2], arr[0] * arr[1]);
      };
      
      const nums = [-10, -20, 5, 7, 10];
      console.log(highestProductOfTwo(nums));
      

    

    // Extension: Do not use native methods.



