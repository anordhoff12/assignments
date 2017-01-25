function noTeenSum(intA, intB, intC, callback) {
   return callback(intA) + callback(intB) + callback(intC);
}

function fixTeen(n) {
    if (n >= 13 && n <= 19 && n !== 15 && n !==16) {
        n = 0;
    }
    return n;
}


console.log(noTeenSum(0, 3, 6, fixTeen));
console.log(noTeenSum(2, 13, 1, fixTeen));
console.log(noTeenSum(2, 1, 14, fixTeen));
console.log(noTeenSum(2, 15, 14, fixTeen));
