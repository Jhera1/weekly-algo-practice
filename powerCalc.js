// Eric.Devslopes
// OP
//  — 02/03/2025 2:03 PM
// Prompt: Write a recursive function that calculates 
// the result of raising a number base to the power of 
// exponent.




// Extension: Solve this recursively.


const power = (base, exponent) => {
    if (exponent === 0) return 1       // base case
    return base * power(base, exponent - 1) // recursive case
  }
  console.log(power(2, 3))

// visual recursion tree diagram

// Let’s build a recursion tree diagram for
// power(2, 3)

// 🌳 Recursion Tree
// power(2, 3)
// = 2 * power(2, 2)
//             |
//             v
//         power(2, 2)
//         = 2 * power(2, 1)
//                     |
//                     v
//                 power(2, 1)
//                 = 2 * power(2, 0)
//                             |
//                             v
//                         power(2, 0)
//                         = 1   <-- base case

// 🔎 Unwinding the calls:

// Now we substitute back upward:

// power(2, 0) = 1

// power(2, 1) = 2 * 1 = 2

// power(2, 2) = 2 * 2 = 4

// power(2, 3) = 2 * 4 = 8


// ✅ Final Answer: 8

// So the recursion tree has branches that go down until the base case, and then when the base case is hit, the results bubble back up the tree.

// 📦 Visualization as a call stack:
// Call stack (top is the latest call):

// power(2, 0)  → returns 1 ✅
// power(2, 1)  → waiting for result
// power(2, 2)  → waiting for result
// power(2, 3)  → waiting for result

// As soon as power(2, 0) finishes, the stack unwinds step by step until the very first call (power(2, 3)) gets its answer.