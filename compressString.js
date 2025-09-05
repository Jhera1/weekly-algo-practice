// Write a function that performs basic string 
// compression using the counts of repeated characters.
// For example, the string "aabcccccaaa" would become
//  "a2b1c5a3".

const compressString = str => {
    if (!str) return ""
  
    let result = ""
    let count = 1
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
      count++
    } else {
        result += str[i].concat(count)
        count = 1
    }
  } return result
}
  
  console.log(compressString("aabcccccaaa")) // "a2b1c5a3"
  console.log(compressString("abc"))         // "a1b1c1"
  console.log(compressString("aaabb"))       // "a3b2"
  

// Extension : Modify the function to return the original
// string if the compressed string would not be smaller.