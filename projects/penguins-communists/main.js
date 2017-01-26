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
        console.log("Missed!");
    }
 }
 
 function coinFlip(){
    if (generatRandomNumber(0,1)) {
        isPenguinsTurn = true;
        sendNuke(penguins, onHit, onMiss);
    } else {
        isPenguinsTurn = false;
        sendNuke(communists, onHit, onMiss);
    }
 }
 
 function generatRandomNumber(min,max) {
    return Math.floor(Math.random() * (max-min+1)  +min);
 }
 
 function onHit(whoGotNuked) {
    whoGotNuked.population = 0;
    console.log(whoGotNuked.name + " got nuked!");
 }
 
 function onMiss(){
    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " were missed!")
 }
 
 while(penguins.isAlive() && communists.isAlive()){
    if(isPenguinsTurn){
        sendNukes(communists, onHit, onMiss);
    } else {
        sendNukes(penguins, onHit, onMiss);
    }
 }
 
 console.log("The end of the war!");
 