/*
Write an island counter for a 2D matrix. This function should return the number
of distinct islands present.

An island is a group of connected 1s (*vertically* or *horizontally* connected).
0 represents water. Islands are distinct if they are separate connected groups.

Examples

islandCounter([
  [1,1,0,0,0],
  [1,1,0,1,1],
  [0,0,0,1,1],
  [0,0,0,0,0],
  [1,1,0,0,1]
]) ➞ 4

islandCounter([
  [0,0,0],
  [0,0,0],
  [0,0,0]
]) ➞ 0
*/
function validMove(col, row, i, j) {
  return i >= 0 && i < col && j >= 0 && j < row;
}

function dfs(stuck, matrix) {
  const diraction = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];
  let rows = matrix.length;
  let cols = matrix[0].length;

  while (stuck.length) {
    const pos = stuck.pop();
    diraction.forEach(([k, z]) => {
      if (validMove(rows, cols, pos[0] + k, pos[1] + z)) {
        if (matrix[pos[0] + k][pos[1] + z] === 1) {
          stuck.push([pos[0] + k, pos[1] + z]);
          matrix[pos[0] + k][pos[1] + z] = "x";
        }
      }
    });
  }
}

function islandCounter(matrix) {
  let countOfIland = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = "x";
        const stuck = [];
        stuck.push([i, j]);
        dfs(stuck, matrix);
        countOfIland++;
      }
    }
  }
  return countOfIland;
}

exports.solution = islandCounter;
