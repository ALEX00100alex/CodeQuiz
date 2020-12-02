
var returnInput = document.querySelector("#form-control");
var clearButton = document.querySelector("#clearhigh");

function myFunction() {
    var highScoreInitials = JSON.parse(localStorage.getItem("user"))
returnInput.value = highScoreInitials.initials + '-' + highScoreInitials.score

clearButton.addEventListener("click", function(){
    returnInput.value = "";
    returnInput.textcontent = returnInput.value
})


}

myFunction()

