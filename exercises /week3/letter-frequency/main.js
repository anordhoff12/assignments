function getFrequency(string) {
    var frequency = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (frequency [character]) {
           frequency [character] ++;
        } else {
           frequency [character] = 1;
        }
    }

    return frequency;
};

console.log(getFrequency("Slimy smelly solution"));

/* With an object container:

var phrase = "slimy smelly solution";

function letterCount(str) {
    var count = {};
    for (var i = 0; i < str.length; i++) {
        if (count[str[i]] !== undefined) {
            count[str[i]]++;
        } else {
            cound[str[i]] = 1;
        }
    }
    console.log(count);
}

letterCount(phrase);