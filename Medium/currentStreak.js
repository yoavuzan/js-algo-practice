/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak(date, dates) {
  if (dates.length === 0) return 0;

  // Convert current date string to Date object
  const currentDate = new Date(date);

  // Check if last date in array matches the given current date
  if (date !== dates[dates.length - 1].date) {
    return 0;
  }

  // Convert all date strings in the array to Date objects
  const dateObjects = dates.map((d) => new Date(d.date));

  let streak = 1; // We already know the last date matches

  // Traverse backward from the second last date
  for (let i = dateObjects.length - 2; i >= 0; i--) {
    const current = dateObjects[i];
    const next = dateObjects[i + 1];

    const diffInTime = next - current;
    const diffInDays = diffInTime / (1000 * 60 * 60 * 24);

    if (diffInDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}
exports.solution = currentStreak;
