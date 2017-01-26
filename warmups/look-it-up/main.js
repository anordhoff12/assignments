var readline = require("readline-sync");

function recallWord() {
    var word = readline.question("What word do you want to look up? ").toLowerCase();
    if (!word || dictionary[word] === undefined) {
        console.log("That word has not been entered in the dictionary yet, you should add it.");
    } else {
        console.log(`\n${word}: ${dictionary[word]}\n`);
    }
}

function addWord() {
    var word = readline.question("What is the new word you'd like to add? ");
    if (!word) {
        console.log("That's not a word. ");
        return
    }
}

//var dictiony = {
//    boy: "not a girl",
//    girl: "not a boy",
//    banana: "yellow fruit"
//};
//
//console.log(dictionary["boy"]); //this will console the index of boy
//
//function addWord(word, definition) {
//    dictionary[word] = definition;
//}
//
//function find(word) {
//    if (dictionary[word] === undefined) {
//        console.log("NOt in the diciotnary yet");
//    } else {
//        return diction[word];
//    }
//    
//} 

//var isRunning = true;
//var options = ["Add a new word", "Add a new definition", "Look up a word"]
//while (isRunning) {
//    var index = readline.keyInSelect(options, "Start walking, " + playerName + "!");
//    if (options[index] === "walk") {
//        walk();
//    } else if (options[2] === "run") {
//        run();
//    } else {
//        fight();
//    }
//}


//var dictiony = {
//    word: "",
//    definition: "",
//}
//
//function recall(word, definition) {
//    return dictiony.word + dictionary.definition
//}
//
//word = readline.keyInSelect("Enter a word");
//
//definition = readline.keyInSelect("Enter a definition");
//
//var showRecall = readline.question("Enter the word you wish to look up");

//var Entry = {
//    wordEntered: wordEntry,
//    definitionEntered: definitionEntry
//}
//
//wordEntry = readline.question("Enter the word you want to define: ");
//
//function wordEntry() {
//    return wordEntry;
//}
//
//definitionEntry = readline.question("Enter the definition of the word: ");
//
//function definitionEntry() {
//    return definitionEntry;
//}
//
//function recallEntry(wordEntry, definitionEntry) {
//     console.log(wordEntered + ": " + definitionEntered);
//}
//
//var recall = readline.question("Enter the word you want to look up: ");
//if (recall == recallEntry) {
//    recallEntry(Entry.wordEntered, Entry.definitionEntered)
//}

//recallEntry = readline.question("Enter the word you want to look up: ");
//
//
//
//function Dictionary(wordEntry, definitionEntry, recallEntry) {
//    this.wordEntry = wordEntry();
//    this.definitionEntry = definitionEntry();
//    this.recallEntry = wordEntry + definitionEntry;
//}
//
