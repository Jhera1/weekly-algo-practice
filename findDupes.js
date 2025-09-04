// Given a non-empty array of integers where every 
// element appears twice except for one, 
// find that single one.

// const findSingle = arr => {
//   let map = {}
//   for (let num of arr) {
//     map[num] = (map[num] || 0) + 1
//   }
//   for (let key in map) {
//     if (map[key] === 1) {
//         return Number(key)
//     }
//   }
//   return 'No single digit'
// }
// console.log(findSingle([2,3,4,5,2,3,4]))

//✅ More efficient solution

// There’s a trick here: since every number appears 
// exactly twice except for one, we can use bitwise XOR.

// Why?

// x ^ x = 0

// x ^ 0 = x

// XOR is commutative/associative (order doesn’t matter).
// If we XOR all numbers together, the pairs cancel out,
// leaving only the single one.

const findSingle = arr => {
  let result = 0
  for (let num of arr) {
    result ^= num
  }
  return result
}

console.log(findSingle([2,3,4,5,2,3,4])) // 5