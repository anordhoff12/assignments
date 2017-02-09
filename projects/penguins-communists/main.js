var isPenguinsTurn;

function Team(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function(){
        return this.population > 0; //this type of operator will return true or false
    }
}
 var penguins = new Team("Penguins", "1000000");
 var communists = new Team("Communists", "1000000");
 
// console.log(penguins);
// console.log(penguins.isAlive());
 
 function sendNukes(party, onHit, onMiss) {
    var didNukeHit = generatRandomNumber(0, 9);
    if (didNukeHit === 0) {
        console.log("Hit!");
        onHit(party);
    } else {
        console.log("The nuke missed and hit an iceberg!");
    }
 }
 
 function coinFlip(){
    if (generatRandomNumber(0, 1) === 0) {
        isPenguinsTurn = true;
        console.log("Penguins send nukes");
        sendNukes(penguins, onHit, onMiss);
    } else {
        isPenguinsTurn = false;
        console.log("Communists send nukes")
        sendNukes(communists, onHit, onMiss);
    }
 }
 
 function generatRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
 }
 
 function onHit(whoGotNuked) {
    isPenguinsTurn = !isPenguinsTurn;
    whoGotNuked.population = whoGotNuked.population - generatRandomNumber(10000, 300000);
    console.log(whoGotNuked.name + " got nuked! And only has a remaining population of: " + whoGotNuked.population);
 }
 
 function onMiss(party){
    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " were missed!")
 }
 
 
coinFlip()
while(penguins.isAlive() && communists.isAlive()){
    if(isPenguinsTurn){
        sendNukes(communists, onHit, onMiss);
    } else {
        sendNukes(penguins, onHit, onMiss);
    }
 }


 
 console.log("That final nuke finished them off!");
 