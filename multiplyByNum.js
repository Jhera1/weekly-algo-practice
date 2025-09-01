// Prompt: Create a function that returns a function 
// that will multiply by an input number. 

// const multiplyBy = n => x => n * x
// const multiplyBy = n => {
//     return function(x) {
//         return n * x
//     }
// }
// let tripple = multiplyBy(3)

// console.log(multiplyBy(3)(10))
// console.log(tripple(10))

// Extension: Modify this function to keep track of 
// the highest product. If a future input is lower than 
// the current highest value, return the highest value.

const multiplyBy = n => {
    let highest = -Infinity
    return function(x) {
        let product = n * x
        if (product > highest) {
            highest = product
        }
        return highest  
    }
}
let tripple = multiplyBy(3)

console.log(multiplyBy(3)(10))
console.log(tripple(10))