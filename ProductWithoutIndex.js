// Given an array of integers, return an array such that
// each element 
// at index i is the product of all the numbers 
// in the original array except the one at i.

// input: array
// output: array
const ProductWithoutIndex = arrOfNums => {
 let result = []
 for (let i = 0; i < arrOfNums.length; i++) {
    let modArr = arrOfNums.filter((_, index) => index !== i)
    result.push(modArr.reduce((a, b) => a * b))
 }
 return result
}
console.log(ProductWithoutIndex([1,2,3,4]))



