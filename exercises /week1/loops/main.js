var fruit = "banana";

    for(var i = 0; i < 5; i++){
        fruit;
    }
    for(var i = 0; i < fruit.length; i++){
        console.log(fruit[i])
    }

function letter(string, character){
    for(var i = 0; i <= tring.length; i++){
        if(string[i] === character){
            return (string.indexOf(character));
        } else if (i === string.length){
            console.log (character + " not found in " + string);
        }
    }
}
console.log(letter("hello","p"));


function findNumber(numberArray){
    for(var i = 0; i < numberArray.length; i++){
       if(numberArray[i] === 42){
           console.log(i);
           break;
       } else if (i === numberArray.length) {
           console.log("no 42s were found");
       }  
   }
}
findNumber([2, 3, 5, 42, 326]);


function findLowestNumber(arrayTen){
    var lowest = arrayTen[0];
    for(var i = 1; i < arrayTen.length; i++){
        if (arrayTen[i] < lowest){
            lowest = arrayTen[i];
        }
    }
    return lowest;
}
console.log(findLowestNumber([-1, 7, 2, 3, 5, 42, 2435, 4, 5, 6, 10]));