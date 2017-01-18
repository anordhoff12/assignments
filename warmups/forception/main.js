var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  

//for (var i = 0; i < people.length; i++) {
//    alphabet += people[0];
//    console.log(people + alphabet);
//}



function forception (people, alphabet) {
    var final = [];
    var alphabet = alphabet.toUpperCase();
    for (var i = 0; i < people.length; i++) {
        final.push(people[i] + ":");
        for (var j = 0; j < alphabet.length; j++){
            final.push(alphabet[j]);
        }
    }
   return final; 
}

console.log(forception(people, alphabet));


//Create a function
// Create empty array to hold the final string
// Uppercased the whole alphabet
 // Loop through the people array
// Psh the current person to the empty array 
    
    
    //loop through the alphabet
    
    // push the current letter of the alphabet to the final array
// console or return the final array

//call our function
