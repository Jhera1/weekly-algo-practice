// Given two strings s and t, write a function to determine if t is an anagram of s.

// const isAnagram = (s, t) => {
//     let cleanStr = str => str.toLowerCase().split('').sort().join('')
//     let sortedS = cleanStr(s)
//     let sortedT = cleanStr(t)
//     return sortedS === sortedT

// }


const isAnagram = (s, t) => {
  let frequencyMap = {}
  let lowerS = s.toLowerCase() 
  let lowerT = t.toLowerCase() 

  for (let letter of lowerS) {
    frequencyMap[letter] = (frequencyMap[letter] || 0) + 1
  }
  for (let letter of lowerT) {
    if (!frequencyMap[letter]) {
        return false
    }
    frequencyMap[letter]--
  }
  return true
}
console.log(isAnagram('Listen', 'Silent'))
console.log(isAnagram('Happy', 'Moonday'))