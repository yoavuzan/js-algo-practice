/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

function ascending(str) {
  
  for (let size = 1; size <= str.length / 2; size++) {
    let isAscending = true;
    let previousNumber = null;
    for (let i = 0; i < str.length; i += size) {
      const currentNumber = parseInt(str.substr(i, size));
      if (previousNumber !== null && currentNumber !== previousNumber + 1) {
        isAscending = false;
        break;
      }
      previousNumber = currentNumber;
    }
    if (isAscending && previousNumber !== null) {
      return true;
    }
  
  return false;
}

exports.solution = ascending;
