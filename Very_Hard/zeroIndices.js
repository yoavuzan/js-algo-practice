/*
You are given an array of binary integers and k, the number of flips allowed.

Write a function that returns the indices of zeroes of which, when flipped, return the longest contiguous sequence of ones.

Examples
zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1) ➞ [1]

zeroIndices([1, 0, 0, 0, 0, 1], 1) ➞ [1]

zeroIndices([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 3) ➞ [6, 7, 9]

zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 3) ➞ [7, 8, 9]
Notes
If multiple combinations of indices tie for longest one sequence, return the indices which occur first (see examples #2, #3).
*/

function zeroIndices( array, k ) {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let maxLength = 0;
  let bestLeft = 0;
  let bestRight = 0;
  const n = array.length;

  while ( right < n ) {
    if ( array[right] === 0 ) {
      zeroCount++;
    }
    right++;  

    while ( zeroCount > k ) {
      if ( array[left] === 0 ) {
        zeroCount--;
      }
      left++;
    }

    if ( right - left > maxLength ) {
      maxLength = right - left;
      bestLeft = left;
      bestRight = right;
    }
  }

  const result = [];
  for ( let i = bestLeft; i < bestRight; i++ ) {
    if ( array[i] === 0 ) {
      result.push(i);
    }
  }
  return result;
}

exports.solution = zeroIndices;