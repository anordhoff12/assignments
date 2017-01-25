function antiCaps(inputString){
    var outputString = "";
    for (var i = 0; i < inputString.length; i++) {
        if(isCaps(inputString[i])){
            outputString += inputString[i].toLowerCase();
        } else {
            outputString += inputString[i].toUpperCase();
        }
    }
    return outputString;
}

function isCaps(letter) {
    return letter === letter.toUpperCase();
}

console.log(antiCaps("Hello"));
console.log(antiCaps("racEcar"));
console.log(antiCaps("bAnAnA"));
