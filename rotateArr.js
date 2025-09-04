// Prompt: Write a function that takes an array and a 
// number k as input and rotates the array to the right 
// by k steps.

// const rotateArr = (arr, k) => arr.slice(-k).concat(arr.slice(0, -k))

// Extension: Modify the function to handle negative 
// values of k to rotate the array to the left.

const rotateArr= (arr, k) => {
   const n = arr.length
   k = ((k % n) + n) % n
   
   return    arr.slice(-k).concat(arr.slice(0, -k))

}
console.log(rotateArr([1,2,3,4,5], 7))