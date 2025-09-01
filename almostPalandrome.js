// Given a string s, return true if the string can be a 
// palindrome after deleting at most one character from 
// it.

// Extension: Have the amount of removals be 
// dynamic

const almostPlanadrome = s => {
 let cleanStr = s.toLowerCase()
 let revStr = str => str.split('').reverse().join('')
 if (revStr(cleanStr) === cleanStr) return true
 for (let i = 0; i < s.length; i++) {
    let modified = cleanStr.slice(0, i) + cleanStr.slice(i + 1)
  if (revStr(modified) === modified) return true
 }
   return false
}
console.log(almostPlanadrome('Kayak'))
console.log(almostPlanadrome('Kayauk'))
console.log(almostPlanadrome('Kazzyauk'))