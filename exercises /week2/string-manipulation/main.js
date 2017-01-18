var readline = require("readline-sync");
var name = readline.question("Hi friend, what is your name? ");
console.log("Nice to meet you, " + name + "!");

var favColor = readline.question("What is your favorite color? ");
console.log(favColor.toUpperCase() + " is great color!");

var portionOfString = readline.question("Tell me a little about yourself in more than 20 characters: ");
var repeatBack = readline.question("What you said has " + (portionOfString.length - 1) + " characters. I want to repeat some back to you. Tell me where to start by entering a number between 1 and " + (portionOfString.length) + ": ");

function lastHalf(str){
    var inHalf = Math.floor(str.length/2);
    if (str.length > 20){
        var ourNewWord = "";
        for (var i = inHalf; i < str.length; i++){
            ourNewWord = ourNewWord + str[i];
        }  
        return "The last half of what you said was: " + (ourNewWord); 
    } else {
        return("You don't have much to say");
    }
}
console.log(lastHalf(portionOfString));

