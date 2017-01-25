var form = document.getElementById("contactForm");
console.dir(form);
var contactForm = document.getElementById("submitForm");
contactForm.addEventListener("click", function () {
    var firstName = form.elements.firstName.value;
    var lastName = form.elements.lastName.value;
    var email = form.elements.email.value;
    var buyerSeller = form.elements.buyerSeller.value;
    var listing = form.elements.listing.value;
     alert("Thank you for contacting North Farm Real Estate. Here is the information you provided: " + firstName + " " + lastName + ", "+ email + ", " + buyerSeller + ", and " + listing + ". One of our agents will contact you shortly.");
})