var readline = require("readline-sync");
playerName = readline.question("You're one of the few who survived the zombie outbreak. But you won't be alive much longer if you can't hold your own against the zombie herds that are growing every day. If you're tough enough, or lucky enough, you may survive and make it to the sanctuary. If not, you're zombie dinner. What's your name survivor? ");
var PlayerStats = {
    playerName: playerName, 
    hitPoints: 25, 
    items: ["Shotgun"]
}

function isAlive() {
    return hitPoints > 0;
}

function stats(playerName, hitPoints, items) {
    console.log("Your Stats are: " + "Hunter name: " + playerName + ", " + "Hit Points: " + hitPoints + ", " + "items: " + items);
}
var myStats = readline.question("If you want to know your stats at any point, just enter 'stats' and I'll tell you how things are looking for you, " + playerName + ". Otherwise, if you're ready to get moving, press 1 to start walking. ");
if (myStats === "stats") {
    stats(PlayerStats.playerName, PlayerStats.hitPoints, PlayerStats.items);
}
var isPlaying = true;
var options = ["walk", "run", "fight"]
//var enemies = ["nuclear zombie", "crazy person, alone too long", "freshly turned zombie"];
while (isPlaying) {
    var index = readline.keyInSelect(options, "Start walking, " + playerName + "!");
    if (options[index] === "walk") {
        walk();
    } else if (options[2] === "run") {
        run();
    } else {
        fight();
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var arrayToAvg = []
for (var i = 0; i < 100; i++) {
    arrayToAvg.push(getRandomNumber(5, 7));
}
getRandonNumber(1, 4);
getRandonNumber(5, 7);


var newEnemy = "";

function enemyName() {
    var attacker = ["nuclear zombie", "freshly turned zombie", "crazy person, alone too long"];
    return attacker[Math.floor(Math.random() * attacker.length)];
}

function enemyHitPoints() {
    if (enemyName === "nuclear zombie") {
        return 45;
    } else if (enemyName === "freshly turned zombie") {
        return 20;
    } else {
        return 15
    }
}

function enemyPower() {
    return Math.floor((Math.random() * 30) + 30);
}
function Enemy(enemyName, enemyHitPoints, enemyPower) {
    this.enemyName = enemyName();
    this.enemyHitPoints = enemyHitPoints(this.enemyName);
    this.enemyPower = enemyPower();
}

function fightScene() {
    var gainHp = getRandomNumber(0, 10);
    var loseHp = getRandomNumber(0, 20);
    
    if (gainHp <= 0) {
        console.log("Your brains are now zombie dinner!");
    } else {
        console.log("You live to fight another day!")
    }
}

function gotAttacked() {
    if (walk) {
        var randomNumber = Math.floor((Math.random() * 3) + 1);
        newEnemy = new Enemy(enemyName, enemyHitPoints, enemyPower);
        if (randomNumber === 1) {
            console.log("You let your guard down! A " + newEnemy.enemyName + " came around the corner! It's coming for you! Do you want to attack it or run,  " + playerName + "?");
            fightScene();
        } else {
            console.log("You got attacked by a " + newEnemy.enemyName + "! That was close, it almost bit your leg off! You better press '2' and walk away!");
        };
    }
}


function walk() {
    if (getRandomNumber(1, 4) === 1) {
        gotAttacked();
    }
    else {
        console.log("You can keep walking by entering '1', but keep your wits about you!");
    }
}

function run() {
    if (getRandomNumber(1, 4) === 2) {
        gotAttacked();
    }
    else {
        console.log("Run, run!");
    }
}

function fight() {
    if (getRandomNumber(1, 4) === 3) {
        gotAttacked();
    }
    else {
        console.log("Fight for your life!");
    }
}

//var enemies = ["nuclear zombie", "crazy person, alone too long", "freshly turned zombie"];
//function gotAttacked() {
//    enemies[getRandomNumber(0, enemies.length - 1)]
//    var hitPoints = 25;
//    console.log("You were attacked by a " + wildEnemy + "! Do you want to fight it or run?")
//    if (hitPoints < 0) {
//        die();
//    }
//}
//
//function die() {
//    console.log("You fought well, but your enemy was more powerful!");
//    isPlaying = false;
//}
//
function coastClear() {
    isWalking = true;
    while (isWalking) {
        doesEnemyAppear();
    }
}
//var newEnemy = "";
//
//function enemyName() {
//    var attacker = ["a nuclear zombie", "a freshly turned zombie", "a crazy person, alone too long"];
//    return attacker[Math.floor(Math.random() * attacker.length)];
//}
//
//function enemyPower() {
//    return Math.floor((Math.random() * 30) + 30);
//}
//var Enemy = function () {
//    this.enemyName = enemyName();
//    this.enemyHitPoints = enemyHitPoints(this.enemyName);
//    this.enemyPower = enemyPower();
//}

//function doesEnemyAppear() {
//    if (isWalking) {
//        var randomNumber = Math.floor((Math.random() * 3) + 1);
//        if (randomNumber === 1) {
//            newEnemy = new Enemy();
//            console.log("You let your guard down! A " + newEnemy.enemyName + " came around the corner! It's coming for you!");
//            isWalking = false;
//        }
//        else {
//            var beginWalking = readline.keyin("That was close, it almost bit your leg off! You better take minute and rest!");
////            limit: 'w'
//        };
//    }
//}
//var isPlaying = true;
//var enemies = ["nuclear zombie", "average Joe zombie", "freshly turned zombie"];
//var hp = 25;
//
//
//
//while (isPlaying){
//    var options = ["walk", "run", "fight"]
//    var index = readline.keyInSelect(options, "The sun's up, it's time to make your way to the sanctuary. Are you ready to go yet? If you are, press 1 to walk. What do you want to do, " + playerName + "?");
//    
//    if (options[index] === "walk"){
//        walk();
//    }
//    
//}
//
//function getRandomNumber(min, max){
//    return Math.floor(Math.random()*(max - min +1)) + min;
//}
//
//var arrayToAvg = []
//for(var i = 0; i < 100; i++){
//    arrayToAvg.push(getRandomNumber(5, 7));
//}
//
//getRandonNumber(1, 4);
//getRandonNumber(5, 7);
//
//function walk(){
//    if(getRandomNumber(1, 4)===1){
//        gotAttacked();
//    } else {
//        console.log("You can continue walking, but be on alert!");
//    }
//}
//function gotAttacked(){
//    var wildEnemy = enemies[getRandomNumber(0, enemies.length - 1)]
//    console.log("You were attacked by a " + wildEnemy + "! Do you want to fight it or run?")
//    var hp = 25
//    
//    if(hp < 0){
//        die();
//    }
//}
//
//function die(){
//    console.log("You fought well, but your enemy was more powerful!");
//    isPlaying = false;
//}