/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles(cord1,cord2) {
  const max_left_x = Math.max(cord1[0].x,cord2[0].x);
  const min_right_x = Math.min(cord1[1].x,cord2[1].x);

  const x_overlap = Math.max(0, min_right_x - max_left_x)

  const max_left_y = Math.max(cord1[0].y,cord2[0].y);
  const min_right_y =Math.min(cord1[1].y,cord2[1].y);

  const y_overlap = Math.max(0, min_right_y - max_left_y)
  
  return x_overlap*y_overlap
}

exports.solution = overlappingRectangles;