document
.getElementById("registerForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("message").innerHTML =
    "Frontend Working Successfully";

});