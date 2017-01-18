var waterBottle = {
    brand: "Fiji",
    color: "clear",
    ouncesItHolds: 16,
}

var furniture = [];

var chair = {
    color: "white",
    hasArms: false,
    seatCushion: true,
}

furniture.push(chair);

var couchSet = {
    fabric: true,
    pillows: 5,
    filling: "goose feathers",
    numberInSet:2,
    totalNumberOfPillows: function(){
        console.log (pillows*2);
    }
}

furniture.push(couch);

var window = {
    hasDrapes: true,
    blinds: false,
    numberOfPanes: 2,
    brand: "Window Co"
}
var pan = {
    type: "frying pan",
    color: "red",
    castIron: false,
}
var fridge = {
    color: "white",
    doors: 2,
    shelves: [
    {
        shelf: "No. 1",
        contains: "butter, cheese",
        removeable: false,
    },
       {
        shelf: "No. 2",
        contains: "milk, eggs",
        removeable: true,
        }
    ]
}
var vaccum = {
    heightInFeet: 3.5,
    color: "red",
    brand: "hoover",
}
var wall = {
    color: "beige",
    numberOfPhotos: 7,
    loadBearing: true,
}
var fireplace = {
    gasFireplace: false,
    hasMantle: true,
    numberOfMeshDoors: 2,
}
var appliances = [
    {
    microwave: 
        {
            stainlessSteal: true,
            voltage: 1000,
            brand: "maytag",
        },
        
    stove:    
        {
            stainlessSteal: false,
            voltage: 2000,
            brand: "GE",
    }
       }
    ]