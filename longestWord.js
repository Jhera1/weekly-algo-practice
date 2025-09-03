// Prompt: Write a function that takes a string 
// as input and returns the longest word in the string.

// const longestWord = str => {
//     let splitString = str.split(' ')
//     let longestWord = null
//     let count = -Infinity
//     for (let word of splitString) {
//       if (word.length > count){
//         longestWord = word
//         count = word.length
//       }
//     }
//     return longestWord
// }
// console.log(longestWord('These frogs leap over the couch'))

// Extension: Modify the function to return an array 
// of all longest words (in case there are ties).

const longestWords = str => {
    let splitString = str.split(' ')
    let longestWords = []
    let count = -Infinity
    for (let word of splitString) {
      if (word.length > count) {
        longestWords = [word] // reset the array!!
        count = word.length
      }  else if (word.length === count) {
        longestWords.push(word)
      }
      
    }
    return longestWords
}
console.log(longestWords('These frogs leap over the couch'))