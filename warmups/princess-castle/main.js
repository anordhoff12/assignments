var player = {
    name: "Princess",
    totalCoins: 0,
    status: "Small",
    star: false,
    setName: function(namePicked) {
        this.name = namePicked;
    },
    
     gotHit: function() {
    switch(this.status) {
        case "Powered Up":
            this.status = "Big";
            break;
        case "Big":
            this.status = "Small";
            break;
        case "Small":
            this.status = "Dead";
            this.gameActive = false;
            break;
        default:
            break;
    }
   
},
    
gotPowerup: function() {
    switch(this.status) {
        case "Small":
            this.status = "Big";
            break;
        case "Big":
            this.status = "Powered Up";
            break;
        default:
            break;

    }
},
gameActive: true,
addCoin: function() {
    this.totalCoins++;
},
print: function() {
    console.log(`Name: ${this.name}\n Status: ${this.status}\n Total Coins:  ${this.totalCoins}\n Star: ${this.star}`
    );
    }
}

player.setName("Mario");
player.addCoin();
player.addCoin();
player.gotHit();
player.gotPowerup();
player.print();





//Alternate way: 
// gotHit: function() {
//        if(this.status === "Powered Up") {
//            this.status = "Big";
//        } else if (this.status === "Big") {
//            this.status = "Small";
//        } else if (this.status === "Small") {
//            this.status = "Dead";
//        } else {
//            console.log("You're already dead!");
//        }
//    


//console.log(character.name);
//console.log(character.setName("Mario"));          
//console.log(character.name);


