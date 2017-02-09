var form = document.getElementById("airlineForm");
console.dir(form);
var submitBooking = document.getElementById("submitForm");
submitBooking.addEventListener("click", function () {
    var firstName = form.elements.firstName.value;
    var lastName = form.elements.lastName.value;
    var age = form.elements.age.value;
    var gender = form.elements.gender.value;
    var destination = form.elements.destination.value;
    
    var checkedBoxes = document.querySelectorAll('input[name=dietaryRestrictions]:checked');
    console.log(checkedBoxes);
    var dietArray = [];
    for(var i = 0; i < checkedBoxes.length; i++){
        dietArray.push(checkedBoxes[i].value)
    }
     alert("Thank you for booking your flight with us. You entered: " + firstName + ", " + lastName + ", "+ age + ", " + gender + ", " + destination + ", and " + dietArray.join(", "));
    console.log(dietArray);
})
