var addSubmit = document.getElementById("submit-add");

addSubmit.addEventListener("click", function(){
    var value1 = document.getElementById("add-input-1").value;
    var value2 = document.getElementById("add-input-2").value;
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    var total = value1 + value2;
    
    var output = document.getElementById("add-output");
    
    output.textContent = total;
})

var minusSubmit = document.getElementById("submit-minus");

minusSubmit.addEventListener("click", function(){
    var value1 = document.getElementById("minus-input-1").value;
    var value2 = document.getElementById("minus-input-2").value;
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    var total = value1 - value2;
    
    var output = document.getElementById("minus-output");
    
    output.textContent = total;
})

var multiplySubmit = document.getElementById("submit-multiply");

multiplySubmit.addEventListener("click", function(){
    var value1 = document.getElementById("multiply-input-1").value;
    var value2 = document.getElementById("multiply-input-2").value;
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    var total = value1 * value2;
    
    var output = document.getElementById("multiply-output");
    
    output.textContent = total;
})

