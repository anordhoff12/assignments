function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    for (var i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
}

var string = "Star Rats!"

console.log(isPalindrome(string));

//function palindrome(x) {
//    var stringArr = x.split("")
//    var noChars = []
//    for (var i = 0; i < stringArr.length; i++) {
//        if (x[i] === "," || x[i] === " " || x[i] === "!" || x[i] === "?" || x[i] === "." || x[i] === "-" || x[i] === ")" || x[i] === "(" || x[i] === "'") {
//            
//        } else {
//            noChars.push(x[i])
//        }
//    }
//    var oldString = noChars.join("");
//    var arrReversed = noChars.reverse();
//    var stringJoined = arrReversed.join("");
//    stringJoined = stringJoined.toLowerCase();
//    oldString = oldString.toLowerCase();
//    if (oldString == stringJoined) {
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//palindrome("Star Rats!"); // true  
//palindrome("palindrome"); // false  
//palindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"); // true
//palindrome("Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I- Lo! - rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!")
//palindrome("Go hang a salami, I'm a lasagna hog")

//function palindrome(str) {
//  var valid = true;
//
//  for (var i = 0, j = str.length - 1; i < str.length; i++, j--) {
//    if (str[i] !== str[j]) 
//        valid = false; 
//      break;
//  }
//
//   console.log(valid);
//} 
//
//palindrome("warmup");
//palindrome("Star Rats!"); 
//palindrome("palindrome");  
//palindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");
//
//function palindrome(str){
//    var lowerCaseString = str.toLowerCase();
//    var reverseString = '';
//    
//    for(var k in str){
//       reverseString += str[(str.length - k) - 1];
//    }
//  if(str === reverseString){
//    console.log('Hey there palindrome');
//  }else{
//    console.log('You are not a palindrome');
//  }
//}
//palindrome("warmup");
//palindrome("Star Rats!"); 
//palindrome("palindrome");  
//palindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");