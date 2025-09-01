// #30 Valid Parentheses

// Eric.Devslopes
// OP
//  — 06/16/2025 10:17 AM
// Write a function that determines if a string
// containing only parentheses is valid (open brackets 
// are closed by the same type of brackets in the 
// correct order).

// Extension: Modify the function to work with multiple 
// types of brackets: (), [], and {}.

// const areParenthesesValid = inputString => {
//     // Define the stack to keep track of unmatched opening brackets
//     let unmatchedOpeningBrackets = [];
  
//     // Define valid opening and closing bracket types
//     const openingBrackets = ['(', '[', '{'];
//     const closingBrackets = [')', ']', '}'];
  
//     // Loop through each character in the string
//     for (let i = 0; i < inputString.length; i++) {
//       const currentCharacter = inputString[i];
  
//       // ✅ If it's an opening bracket, push it to the stack
//       if (openingBrackets.includes(currentCharacter)) {
//         unmatchedOpeningBrackets.push(currentCharacter);
//       }
  
//       // ✅ If it's a closing bracket, check for a match
//       else if (closingBrackets.includes(currentCharacter)) {
//         console.log(unmatchedOpeningBrackets)
//         // Pop the last unmatched opening bracket
//         const lastOpeningBracket = unmatchedOpeningBrackets.pop();
//         console.log(lastOpeningBracket)
//         // Find the corresponding opening bracket for the current closing one
//         const matchingOpeningToClosingBracket =
//           openingBrackets[closingBrackets.indexOf(currentCharacter)];
  
//         // ❌ If it doesn't match, return false
//         if (lastOpeningBracket !== matchingOpeningToClosingBracket) {
//           return false;
//         }
//       }
  
//       // ❌ If it's not a bracket at all (optional — can skip or fail)
//       else {
//         return false;
//       }
//     }
  
//     // ✅ If the stack is empty, all brackets were matched correctly
//     return unmatchedOpeningBrackets.length === 0;
//   };
  

const areParenthesesValid = inputString => {
    // Define a map of closing brackets to their matching opening brackets
    const bracketPairs = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  
    // Stack to keep track of unmatched opening brackets
    const unmatchedOpeningBrackets = [];
  
    // Loop through each character in the string
    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];
  
      // ✅ Case 1: If it's an opening bracket, push it to the stack
      if (Object.values(bracketPairs).includes(currentChar)) {
        unmatchedOpeningBrackets.push(currentChar);
      }
  
      // ✅ Case 2: If it's a closing bracket, validate it
      else if (Object.keys(bracketPairs).includes(currentChar)) {
        // Pop the last unmatched opening bracket
        const lastOpeningBracket = unmatchedOpeningBrackets.pop();
  
        // Get the expected opening bracket for this type of closing bracket
        const expectedOpening = bracketPairs[currentChar];
  console.log(expectedOpening)
        // ❌ Mismatch — return false
        if (lastOpeningBracket !== expectedOpening) {
          return false;
        }
      }
  
      // ❌ Optional: If character is not a bracket at all, treat it as invalid
      else {
        return false;
      }
    }
  
    // ✅ All brackets matched if the stack is empty
    return unmatchedOpeningBrackets.length === 0;
  };
  
console.log(areParenthesesValid("({[]})"));   // true ✅
console.log(areParenthesesValid("({[})"));    // false ❌
// console.log(areParenthesesValid("(){}[]"));   // true ✅
// console.log(areParenthesesValid("((({})))")); // true ✅
// console.log(areParenthesesValid("((())"));    // false ❌