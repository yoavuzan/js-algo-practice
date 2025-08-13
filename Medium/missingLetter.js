/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(string) {
  let expectedCode = string.charCodeAt(0);

  for (let char of string) {
    if (char.charCodeAt(0) !== expectedCode) {
      return String.fromCharCode(expectedCode);
    }
    expectedCode++;
  }

  return "No Missing Letter";
}                                    


exports.solution = missingLetter;