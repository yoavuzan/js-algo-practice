/*
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
 [1, 5, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ true

sudokuValidator([
 [1, 1, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ false
*/
function checkRange(num){
  return num > 0 && num < 10;
}

function checkRows(matrix) {
  const mySet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(!checkRange(matrix[i][j])) return false;
      mySet.add(matrix[i][j]);
    }
    if (mySet.size !== 9) {
      return false;
    }
    mySet.clear();
  }
  return true;
}

function checkCols(matrix) {
  const mySet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(!checkRange(matrix[j][i])) return false;
      mySet.add(matrix[j][i]);
    }
    if (mySet.size !== 9) {
      return false;
    }
    mySet.clear();
  }
  return true;
}

function checkBoxes(matrix) {
  const mySet = new Set();
  for (let i = 0; i < matrix.length; i += 3) {
    for (let j = 0; j < matrix[i].length; j += 3) {
      for (let z = i; z < i + 3; z++) {
        for (let k = j; k < j + 3; k++) {
          if(!checkRange(matrix[z][k])) return false;
          mySet.add(matrix[z][k]);
        }
      }
      if (mySet.size !== 9) {
        return false;
      }
      mySet.clear();
    }
  }
  return true;
}

function sudokuValidator(matrix) {
  return checkRows(matrix) && checkCols(matrix) && checkBoxes(matrix);
}

exports.solution = sudokuValidator;
