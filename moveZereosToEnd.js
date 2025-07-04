// # 29 Move Zereo's to the End
// Eric.Devslopes
// OP
//  — 06/09/2025 9:27 AM
// Write a function that takes an array of 
// numbers and moves all zeroes to the end while maintaining 
// the relative order of non-zero elements 

// Extension: Modify the function to minimize the total 
// number of operations.

const moveZereosToEnd = arr => arr.sort().reverse()
console.log(moveZereosToEnd([0, 1, 0, 3]))