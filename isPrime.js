// "Prompt: Write a function that determines if a number
//  is prime. 

// const isPrime = n => {
//     if (n < 2) return false
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false
//     }
//     return true
//   }
  
//   console.log(isPrime(7))  // true
//   console.log(isPrime(6))  // false
//   console.log(isPrime(9))  // false
//   console.log(isPrime(13)) // true
  

// Extension: Modify the function to return an array 
// of all prime numbers less than the given number."

const arrOfPrimes = n => {
    let result = []
    for (let i = 2; i <= n; i++) {
        let prime = true
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false
                break
            }
        }
        if (prime) {
            result.push(i)
        }
    }
    return result
}
  console.log(arrOfPrimes(7)) // => [2, 3, 5, 7]


      