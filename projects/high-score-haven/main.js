//document.getElementById("name").required = true;
//
//var checkedBox = document.getElementById("trashTalk");
//var trashTalk = ["You suck!", "I'm better than you!", "Pfff, that's the best you can do?!"];
//
//$("button").click(function () {
//    if ($("form").valid()){
//        var trash = [];
//        
//        if (checkedBox.checked) {
//            if (generateRandomNumber(1, 3) === 1) {
//                trash.push(trashTalk[0]);
//            } else if (generateRandomNumber(1, 3) ===2) {
//                trash.push(trashTalk[1]);
//            } else {
//                trash.push(trashTalk[2])
//            }
//        } else {
//            trash.push("I'll be nice today.")
//            alert("Box is not checked");
//        }
//    }
//        
//        trash = trash.toString("")
//        var name = $("#name").val();
//        var game = $("#game").val();
//        var date = $("#date").val();
//        var score = $("#score").val();
//        var row = `<tr><td>${name}</td><td>${game}</td><td>${date}</td><td>${score}</td><td>${trash}</td></tr>`;
//        
//        $(".table").html(row);
//    
//    
//});
//
//function generateRandomNumber(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}

//        if (checkedBox.checked) {
    //            if (getRandomNumber (1, 3) === 1) {
    //                trash.push(trashTalk[0]);
    //            } else if (getRandomNumber(1, 3) ===2) {
    //                trash.push(trashTalk[1]);
    //            } else {
    //                trash.push(trashTalk[2])
    //            }
    //        } else {
    //            trash.push("I'll be nice today.")
    //            alert("Box is not checked");
    //        }
    //    trash = trash.toString("");
    //    }
    //  

var scores = JSON.parse(localStorage.getItem("highScores")) || [];

showScores();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trashTalk() {
    var trash = [];
          
    var checkbox = $("#trashTalk");
    if (checkbox[0].checked) {
        if (getRandomNumber(1, 3) === 2) {
            return "You suck!";
        }
        else if (getRandomNumber(1, 3) === 2) {
            return "Try again!";
        }
        else {
            return "Ametuer hour!";
        }
    }
    else {
        return ("");
    };
}

function showScores() {
    tableString = '<tr><th>Player Name</th><th>Game Played</th><th>Date of High Score</th><th>New High Score</th><th>Trash Talk</th></tr>';
    for (var i = 0; i < scores.length; i++) {
        tableString += "<tr><td>" + scores[i].name + "</td>";
        tableString += "<td>" + scores[i].game + "</td>";
        tableString += "<td>" + scores[i].date + "</td>";
        tableString += "<td>" + scores[i].score + "</td>";
        tableString += "<td>" + scores[i].trashTalk + "<td></tr>";
    }
    console.log(tableString);
    $(".table").html(tableString);
}

$("#submitScore").click(function () {
    var newScore = {};
    newScore.name = $("#name").val();
    newScore.game = $("#game").val();
    newScore.date = $("#date").val();
    newScore.score = $("#score").val();
    newScore.trashTalk = trashTalk();
    console.log(scores);
    var tableRowString = "";
    scores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(scores));
    console.log(scores);
    showScores();
})
var submitScoreButton = $("#submitScore");
var scoreInput = $("#form");