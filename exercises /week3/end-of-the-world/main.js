var seconds_left = 10;
var interval = setInterval(function() {
    document.getElementById("timer").innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById("timer").innerHTML = "It's the end of the world!";
        clearInterval(interval);
    }
}, 1000);


