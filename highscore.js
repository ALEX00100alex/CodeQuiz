
var returnInput = document.querySelector("#form-control");
function myFunction() {
    var highScoreInitials = localStorage.getItem("user");
    document.returnInput.innerHTML = highScoreInitials
}

