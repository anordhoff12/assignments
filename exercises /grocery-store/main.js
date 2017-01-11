var shopper = {
		firstName: "Chad",
		isFavoriteStore: False,	
        numberOfItemsBought: 10,
        groceryCart: {
            foodItems: ["Bread", "Butter", "Milk", "Eggs", "Cheese"],
            nonFoodItems: ["Socks", "Comb", "Lightbulb", "Batteries", "Notebook", "Pens"]
        },
        speak: function() {
        console.log("I hate Shopping!");
            }
        };

shopper.speak();
