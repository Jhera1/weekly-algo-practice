// Write a function that takes an array of integers 
// and a target integer. The function should return 
// indices of the two numbers that add up to the target.
// Solve this in O(n) or better.

// const twoSumOptimized = (intArr, t) => {
//     let result = []
//     for (let i = 0; i < intArr.length; i++) {
//         for (let j = i + 1; j < intArr.length; j++) {
//         if (intArr[j] + intArr[i] === t) {
//             result.push(intArr.indexOf(intArr[i])) 
//             result.push(intArr.indexOf(intArr[j]))
            
//         }
//         }
//     }
//     return result
// }

// A Map is like an object but with some advantages:
// It stores key → value pairs.
// It remembers the insertion order.
// Keys can be of any type (not just strings like in plain objects).
// It has helpful methods: .set(), .get(), .has(), .delete(), etc.

const twoSumOptimized = (intArr, t) => {
    let map = new Map()
    for (let i = 0; i < intArr.length; i++) {
        let companionNum = t - intArr[i]
        if (map.has(companionNum)) {
            return [map.get(companionNum), i]
        }
        map.set(intArr[i], i)
    }
        return [] // no solution
  }
  
  console.log(twoSumOptimized([10, 11, 33, 19, 5], 24)) 
  
