function codeCount(string) {
var codeCounter = 0;
    for (var i = 0; i < string.length; i++){
        if (string[i] === "c") {
            if (string [i + 1] === "o") {
                if (string[i + 3] === "e") 
                    codeCounter += 1;
            }
        }
    }
    return codeCounter;
}
console.log(codeCount("codemaddfehancomedafe"));
