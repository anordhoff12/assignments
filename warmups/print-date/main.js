function getDay() {
    var today = new Date();
    var day = today.getDay();
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log("Today is: " + daysOfTheWeek[day]);
    var time = today.toLocaleTimeString();
    console.log("The time is: " + time);
}

getDay();

/* alternate way:

var newDate = function() {
    date = new Date();
    fullDate = date.toString();
    console.log(fullDate);
    console.log("Today is: " + fullDate(0,3));
    console.log("The time is:" + fullDate.slice(16,fullDate.length));
}

newDate();