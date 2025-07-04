// # 29 Move Zereo's to the End
// Eric.Devslopes
// OP
//  — 06/09/2025 9:27 AM
// Write a function that takes an array of 
// numbers and moves all zeroes to the end while maintaining 
// the relative order of non-zero elements 

// Extension: Modify the function to minimize the total 
// number of operations.


// const moveZereosToEnd = arr => {
//   let nonZeros = arr.filter(a => a !== 0)
//   let zeros = arr.filter(a => a === 0)
//   return nonZeros.concat(zeros)
// }

// Extention

const moveZereosToEnd = arr => {
  let nextNonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nextNonZeroIndex++] = arr[i];
    }
  }
  while (nextNonZeroIndex < arr.length) {
    arr[nextNonZeroIndex++] = 0;
  }
  return arr;
}


console.log(moveZereosToEnd([0, 1, 0, 3])) // => [1, 3, 0, 0]