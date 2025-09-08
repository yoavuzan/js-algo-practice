/*
Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/
function join(array) {
  let min = 90;
  let res = array[0]; // start with first word

  for (let i = 1; i < array.length; i++) {
    const word = array[i];
    let slice = Math.min(res.length, word.length);
    let overlap = 0;

    // find the largest overlap
    while (slice > 0) {
      if (res.slice(-slice) === word.slice(0, slice)) {
        overlap = slice;
        break;
      }
      slice--;
    }

    // update min overlap found
    if (overlap < min) {
      min = overlap;
    }

    // merge
    res = res + word.slice(overlap);
  }

  return [res, min];
}


exports.solution = join;
