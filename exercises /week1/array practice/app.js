var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop();
console.log ("fruit", "vegetables");

fruit.splice(0,1);
console.log ("fruit", "vegetables");

var orangeIndex = fruit.indexOf("orange");
console.log ("fruit", "vegetables");

fruit.push(orangeIndex);
console.log ("fruit", "vegetables");

//could write the previous two lines this way: 
// fruit.push(fruit.indexOf("orange"));

console.log(vegetables.length):

vegetables.push(vegetables.length);
console.log ("fruit", "vegetables");

var food = fruit.concat(vegetables);
console.log (food);

food.splice(4,2);
console.log (food)

food.reverse();
console.log(food.tostring());


