/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

function numThenChar(matrix) {
  const { Heap } = require("heap-js");

  const minNumber = new Heap((a, b) => a - b);

  const minLowerChars = new Heap((a, b) => a.localeCompare(b));

  const minUpperChars = new Heap((a, b) => a.localeCompare(b));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (typeof matrix[i][j] === "number") {
        minNumber.push(matrix[i][j]);
      } else {
        if (matrix[i][j].toUpperCase() === matrix[i][j]) {
          minUpperChars.push(matrix[i][j]);
        } else {
          minLowerChars.push(matrix[i][j]);
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!minNumber.isEmpty()) {
        matrix[i][j] = minNumber.pop();
      } else {
        if (!minUpperChars.isEmpty()) {
          matrix[i][j] = minUpperChars.pop();
        } else {
          matrix[i][j] = minLowerChars.pop();
        }
      }
    }
  }

  return matrix;
}

console.log(
  numThenChar([
    [1, 2, 4.4, "f", "a", "b"],
    [0],
    [0.5, "d", "X", 3, "s"],
    ["f", "e", 8],
    ["p", "Y", "Z"],
    [12, 18],
  ])
);

exports.solution = numThenChar;
