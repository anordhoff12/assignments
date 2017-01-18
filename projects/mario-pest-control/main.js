var goombaTotalCost = document.getElementById("goombaTotalCost");

goombaTotalCost.addEventListener("click", function() {
    var valueCaught = document.getElementById("goombaCaught").value;
    var valuePrice = document.getElementById("goombaPrice").value;
    
    valueCaught = parseInt(valueCaught);
    valuePrice = parseInt(valuePrice);
    
    var total = valueCaught * valuePrice;
    
    var output = document.getElementById("goombaOutput");
    
    output.textContent = total;
})

var boombTotalCost = document.getElementById("boombTotalCost");

goombaTotalCost.addEventListener("click", function() {
    var valueCaught = document.getElementById("boombCaught").value;
    var valuePrice = document.getElementById("boombPrice").value;
    
    valueCaught = parseInt(valueCaught);
    valuePrice = parseInt(valuePrice);
    
    var total = valueCaught * valuePrice;
    
    var output = document.getElementById("boombOutput");
    
    output.textContent = total;
})

var cheepTotalCost = document.getElementById("cheepTotalCost");

goombaTotalCost.addEventListener("click", function() {
    var valueCaught = document.getElementById("cheepCaught").value;
    var valuePrice = document.getElementById("cheepPrice").value;
    
    valueCaught = parseInt(valueCaught);
    valuePrice = parseInt(valuePrice);
    
    var total = valueCaught * valuePrice;
    
    var output = document.getElementById("cheepOutput");
    
    output.textContent = total;
})