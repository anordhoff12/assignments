var rectangle = document.getElementById("box");
var body = document.getElementById("body");
    
rectangle.addEventListener("mouseover", function() {
    rectangle.style.backgroundColor = "blue"
})

rectangle.addEventListener("mousedown", function(){
    rectangle.style.backgroundColor = "red"
})

rectangle.addEventListener("mouseup", function() {
    rectangle.style.backgroundColor = "yellow"   
})

rectangle.addEventListener("dblclick", function() {
    rectangle.style.backgroundColor = "green"   
})

body.addEventListener("wheel", function() {
    rectangle.style.backgroundColor = "orange"   
})