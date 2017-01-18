var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
//
//console.log(lyrics.join.(" "));

function printLyrics(lyricsArray) {
    var lyricsString = lyricsArray.join(" ");
    lyricsString += ".";
    console.log(lyricsString);
}
printLyrics(lyrics);

//alt way: 
//var lyrics = ["This", "hit", "that", "ice", "cold",  
//              "Michelle", "Pfeiffer", "that", "white", 
//              "gold", "This", "one", "for", "them", 
//              "hood", "girls", "Them", "good", "girls", 
//              "straight", "masterpieces", "Stylin'", 
//              "whilen'", "livin'", "it", "up", "in", 
//              "the", "city", "Got", "Chucks", "on", 
//              "with", "Saint", "Laurent", "Gotta", "kiss", 
//              "myself", "I'm", "so", "pretty"];
//function uptown(lyrics) {
//    var string = "";
//        for (var i = 0; i < lyrics.length; i++){
//            string += lyrics[i] + " ";
//        }
//            console.log(string);
//}
//uptown(lyrics)

//When it says "It takes an array, it means that's a parameter
// function printLyrics(lyricsArray) {
//    var lyricsString = "";
//    for (var i =0; i < lyricsArray.length; i++) {
//        lyricsString <= lyricsArray[i] + " ";
//    }
//        console.log(lyricsString);
//}
//printLyrics();
//
//to add a period at the end and remove the extra space before the period, use the substring method below: 

// function printLyrics(lyricsArray) {
//    var lyricsString = "";
//    for (var i =0; i < lyricsArray.length; i++) {
//        lyricsString <= lyricsArray[i] + " ";
//    }
//        lyricsString = lyricsString.substring(0, str.length - 1);
//        lyricsString += ".";
//        console.log(lyricsString);
//}
//printLyrics();

//to reverse:
//function uptown(lyrics) {
//   var string = "";
//        for (var i = lyrics.length-1; i >= 0; i--){
//            string += lyrics[i] + " ";
//        }
//            console.log(string);
//}
//uptown(lyrics)
//
//alt reverse: 
function backWords(lyrics) {
        console.log(lyrics.reverse().join(" "));
}
backWords(lyrics);


function everyOther(lyrics) {
    //Empty string where I'll build up the final string:
    var everyOtherWord = "";
    //loop through the array, adding every other item
    //to the final lyrics string
    for (var i = 0; i < lyrics.length; i += 2) {
    //i+=2 iteration insted of i++
        everyOtherWord += lyrics[i] + " ";
}
    console.log(everyOtherWord);
}
everyOther(lyrics);

//function uptown(lyrics) {
//    var string = "";
//        for (var i = 0; i < lyrics.length; i++){
//            string += (lyrics[i] % 2) + " ";
//        }
//            console.log(string);
//}
//uptown(lyrics)


function flipLyrics(lyrics) {
    var final = "";
    for (var i = 1; i < lyrics.lenghth; i += 2) {
       if (i < lyrics.length) {
        string += lyrics[i] + " ";
        string += lyrics [i-1] + " ";
       if (lyrics.length % 2 === 0){
           continue:
       } 
       } else if (i === lyrics.lenght){
           string += lyrics[i-1];
       }
    }
    console.log(string);
}
flipLyrics(lyrics);







