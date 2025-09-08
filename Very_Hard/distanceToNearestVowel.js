/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

function distanceToNearestVowel(str) {
  // create set with vowels
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const distances = new Array(str.length).fill(Infinity);
  let lastVowel = -1;

  // forward pass
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      distances[i] = 0;
      lastVowel = i;
    } else if (lastVowel !== -1) {
      distances[i] = i - lastVowel;
    }
  }

  lastVowel = -1;

  // backward pass
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.has(str[i])) {
      lastVowel = i;
    } else if (lastVowel !== -1) {
      distances[i] = Math.min(distances[i], lastVowel - i);
    }
  }

  return distances;
}

exports.solution = distanceToNearestVowel;
