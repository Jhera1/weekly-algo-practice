// Prompt: Given an array of integers, find the highest 
// product of two unique numbers in the array.

// const highestProduct = arrOfNums => {
//     let sortedArr = arrOfNums.sort()
//     return sortedArr[arrOfNums.length - 1] * sortedArr[arrOfNums.length - 2]
// }
// console.log(highestProduct([7, 9, 3, 2, 6]))

// Extension: Do not use native methods.

const highestProduct = arrOfNums => {
    let highest = -Infinity
    let secondHighest = -Infinity
    for (let num of arrOfNums) {
        if (num > highest) {
            secondHighest = highest
            highest = num
        } else if (num > secondHighest) {
            secondHighest = num
        }
        
    }
    return highest * secondHighest
}
console.log(highestProduct([7, 9, 3, 2, 6]))