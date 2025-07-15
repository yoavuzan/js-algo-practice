/*
In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.
Examples
returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
Notes
Keep the same ordering in the output.
*/

function returnUnique(arr) {
  const counter = arr.reduce((dic, num) => {
    if (num in dic) {
      dic[num]++;
    } else {
      dic[num] = 1;
    }
    return dic;
  }, {});

  return arr.filter((key) => counter[key] === 1);
}

exports.solution = returnUnique;
