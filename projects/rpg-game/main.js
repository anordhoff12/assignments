var readline = require("readline-sync");

var PlayerStats = {
    playerName: "",
    hitPoints: 25,
    items: ["Shotgun"]
}

function stats(name, hitPoints, items) {
    console.log("\nYour Stats are: \n" + "Name: " + name + "\nHit Points: " + hitPoints + items);
}

function coastClear() {
    isWalking = true;
    while (isWalking) {
        doesEnemyAppear();
    }
}

var newEnemy = "";

function enemyName() {
    var attacker = ["nuclear zombie", "freshly turned zombie", "crazy person, alone too long"];
    return attacker[Math.floor(Math.random() * attacker.length)];
}

function enemyPower() {
    return Math.floor((Math.random() * 30) + 30);
}

var Enemy = function () {
    this.enemyName = enemyName();
    this.enemyHitPoints = enemyHitPoints(this.enemyName);
    this.enemyPower = enemyPower();
}

function doesEnemyAppear() {
    if (isWalking) {
        var randomNumber = Math.floor((Math.random() * 3) +1);
        if (randomNumber === 1) {
            newEnemy = new Enemy();
            console.log("\nYou let your guard down! A " + newEnemy.enemyName + " came around the corner!\nIt's coming for you!");
            isWalking = false;
        } else {
            var beginWalking = readline.keyin("\nThat was close, it almost bit your leg off! You better take minute and rest!")
            limit: 'w'
        };
    }
}

var isPlaying = true;
var enemies = ["nuclear zombie", "average Joe zombie", "freshly turned zombie"];
var hp = 25;

playerName = readline.question("You're one of the few who survived the zombie outbreak. But you won't be alive much longer if you can't hold your own against the zombie herds that are growing every day. If you're tough enough, or lucky enough, you may survive and make it to the sanctuary. If not, you're zombie dinner. What's your name survivor? ");

while (isPlaying){
    var options = ["walk", "look", "rest"]
    var index = readline.keyInSelect(options, "The sun's up, it's time to make your way to the sanctuary. Are you ready to go yet? If you are, press 1 to walk. What do you want to do, " + playerName + "?");
    
    if (options[index] === "walk"){
        walk();
    }
    
}

function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max - min +1)) + min;
}

var arrayToAvg = []
for(var i = 0; i < 100; i++){
    arrayToAvg.push(getRandomNumber(5, 7));
}

getRandonNumber(1, 4);
getRandonNumber(5, 7);

function walk(){
    if(getRandomNumber(1, 4)===1){
        gotAttacked();
    } else {
        console.log("You can continue walking, but be on alert!");
    }
}
function gotAttacked(){
    var wildEnemy = enemies[getRandomNumber(0, enemies.length - 1)]
    console.log("You were attacked by a " + wildEnemy + "! Do you want to fight it or run?")
    var hp = 25
    
    if(hp < 0){
        die();
    }
}

function die(){
    console.log("You fought well, but your enemy was more powerful!");
    isPlaying = false;
}
