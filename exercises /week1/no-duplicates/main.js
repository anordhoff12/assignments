//No duplicates: 

function noDupes(string) {
    //lowercase letters
    string = string.toLowerCase();
    
    //create an empty string for unique letters
    // create an emptry string for misfits (duplicates)
    var uniques = "";
    var misfits = "";
    
    //loop through each letter in the lowercase string
    for (var i = 0; i < string.length; i++) {
        //check if the current letter is already in the unique letters string
    if (uniques.indexOf(string[i]) !== -1) {
        // Put in the duplicates string
        misfits += string[i];
    } else {
        // put it in the unique letters string
        uniques += string[i];
    }
}
        //console.log uniques and the misfits/duplicates
        console.log("No duplicates: " + uniques);
        console.log("Extras: " + misfits);
}

noDupes("bookkeeper Larry");

//string = string.toLowerCase().split(" ").join("");