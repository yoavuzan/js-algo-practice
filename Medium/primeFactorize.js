/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

function primeFactorize(num) {
  if (num === 1) return [];

  // Step 1: Find all primes up to num/2
  const primes = new Set([2]);
  for (let i = 3; i <= num / 2; i += 2) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.add(i);
  }

  // Step 2: Collect factors from primes
  const res = [];
  for (let p of primes) {
    while (num % p === 0) {
      res.push(p);
      num /= p;
    }
  }

  // Step 3: If no factors found, num itself is prime
  if (res.length === 0) {
    res.push(num);
  }

  return res;
}
exports.solution = primeFactorize;
