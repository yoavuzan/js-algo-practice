/*
In JavaScript, the modulo operator is very bad. For example, -13 % 64 = -13, when the actual answer is 51. Create a function to fix this. It should also work for positive numbers.

Examples
mod(-13, 64) ➞ 51

mod(50, 25) ➞ 0

mod(-6, 3) ➞ 0
Notes
All test cases contain valid numbers.
*/

function mod(num1, num2) {
  if (num1 < 0) {
    let calmod = Math.abs(num1) % num2;
    if (calmod != 0) {
      return num2 - calmod;
    }
    return 0;
  }
  return num1 % num2;
}

exports.solution = mod;
