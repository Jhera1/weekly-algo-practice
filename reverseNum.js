// Prompt: Write a function that reverses 
// an input number. 

// const reverseNum = num => Number(num.toString().split('').reverse().join(''))
// console.log(reverseNum(375))

// Extension: Do this without changing the data 
// type of the number.

const reverseNum = num => {
   let result = 0
   while (num > 0) {
    // find last number
    let lastDigit = num % 10
    // add to result
    result = result * 10 + lastDigit
    // remove last number
    num = Math.floor(num / 10)
   }
   return result
}
console.log(reverseNum(375))
