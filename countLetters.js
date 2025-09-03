// Prompt: Write a function that takes a string and 
// returns a dictionary with each character as the key 
// and the number of times it appears in the string as 
// the value.

// Extension: Modify the function to ignore spaces and 
// punctuation, and count letters case-insensitively.

// const strToMap = str => {
//     let letterMap = {}
//     let lowerStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//     for (let letter of lowerStr) {
//         letterMap[letter] = (letterMap[letter] || 0) + 1
//     }
//     return letterMap
// }
// console.table(strToMap('Somewhere in Time?'))



// Extension: Modify the function to return the kth most 
// commonly occurring letter. 
// Example: ("Hello, World!", 2) would return the 
// 2nd most common letter in the string. In this case,"o"!

const strToMap = (str, k) => {
    let letterMap = {}
    let lowerStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    for (let letter of lowerStr) {
        letterMap[letter] = (letterMap[letter] || 0) + 1
    }
    return Object.entries(letterMap).sort((a, b) => b[1] - a[1], 0)[k - 1][0]
}
console.table(strToMap('Hello, World', 2))