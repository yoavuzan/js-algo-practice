/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/
                                                             
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lastCommonMultiple(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  return Math.abs(num1 * num2) / gcd(num1, num2);
}

exports.solution = lastCommonMultiple;
