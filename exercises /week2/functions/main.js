function myKids(kids1, kids2) {
    var kids1 = 2;
    var kids2 = 4;
    return kids1 + kids2;
}
console.log(myKids());

function choreHours(dishesMinutes, sweepingMinutes, laundryMinutes) {
    if (dishesMinutes > sweepingMinutes && dishesMinutes > laundryMinutes) {
        var longestChore = dishesMinutes;
    } else if (sweepingMinutes > dishesMinutes && sweepingMinutes > laundryMinutes) {
        var longestChore = sweepingMinutes;
    } else {
        var longestChore = laundryMinutes;       
    }
    return longestChore;
 }
console.log(choreHours(30, 5, 70));

function isEven(number) {
  number = Number(number);
  return number === 0 || !!(number && !(number%2));
}
console.log(isEven(6));

// If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string).
var createdString = "Happy birthday to you!";

function string(createdString) {
    if (string.length <= 20);
        return string + string;
   } else {
        return string % 2;
    }
console.log(string);


