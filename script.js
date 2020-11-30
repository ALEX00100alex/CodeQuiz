
var countdownTimer = document.getElementById("time-left");
var timeLeft = 75;

function countDown() {    
    var timerInterval = setInterval (function () {
     timeLeft --;    
     if (timeLeft ===0) {
             clearInterval (timerInterval);
         }
         countdownTimer.innerHTML = timeLeft
       
     }, 1000);
 
};
countDown ();


