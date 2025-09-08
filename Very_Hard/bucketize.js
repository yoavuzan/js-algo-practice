/*
Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

Examples
bucketize("she sells sea shells by the sea", 10)
➞ ["she sells", "sea shells", "by the sea"]

bucketize("the mouse jumped over the cheese", 7)
➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

bucketize("fairy dust coated the air", 20)
➞ ["fairy dust coated", "the air"]

bucketize("a b c d e", 2)
➞ ["a", "b", "c", "d", "e"]
Notes
Spaces count as one character.
Trim beginning and end spaces for each word bucket (see final example).
If buckets are too small to hold a single word, return an empty array: []
The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.
*/

function bucketize(str, num) {
  const splitArr = str.split(" ");
  let i = 0;
  const res = [];

  while (i < splitArr.length) {
    if (splitArr[i].length > num) {
      return [];
    }

    let strToPush = "";

    while (
      i < splitArr.length &&
      (strToPush.length === 0
        ? splitArr[i].length
        : strToPush.length + 1 + splitArr[i].length) <= num) {
      strToPush += (strToPush.length === 0 ? "" : " ") + splitArr[i];
      i++;
    }

    res.push(strToPush);
  }

  return res;
}

// function bucketize(str, n) {
//   const words = str.split(" ");
//   const res = [];
//   let current = "";

//   for (let word of words) {
//     // if a single word is longer than the bucket size → impossible
//     if (word.length > n) return [];

//     // if current bucket is empty, just take the word
//     if (current.length === 0) {
//       current = word;
//     } 
//     // else, check if adding this word (with space) still fits
//     else if (current.length + 1 + word.length <= n) {
//       current += " " + word;
//     } 
//     // otherwise, push the current bucket and start a new one
//     else {
//       res.push(current);
//       current = word;
//     }
//   }

//   if (current.length > 0) res.push(current);

//   return res;
// }

// function bucketize(str, num) {
//   const words = str.split(" ");

//   // if any word is too long → impossible
//   if (words.some(w => w.length > num)) return [];

//   return words.reduce((res, word) => {
//     if (res.length === 0) {
//       // first bucket starts with the word
//       res.push(word);
//     } else {
//       let last = res[res.length - 1];

//       // if adding fits in the last bucket
//       if (last.length + 1 + word.length <= num) {
//         res[res.length - 1] = last + " " + word;
//       } else {
//         res.push(word);
//       }
//     }
//     return res;
//   }, []);
// }

exports.solution = bucketize;