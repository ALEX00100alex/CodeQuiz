function populate () {
    if (quiz.isEnded ()) {
       showScores (); 

    } else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i=0; i<choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);

        }
   
}

};

function guess (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate ();
    }
};

function showScores () {
    var gameOverHtml = "<h1 id = 'done'>All Done!</h1>";
    gameOverHtml +=  "<a href='highscore.html' id='highscore'>View Highscores </a>";
    gameOverHtml += "<div id='time'> Time: <span>" + timeLeft + "</span></div>";
    gameOverHtml += "<h2 id = 'score'> Your final score:" + " " + timeLeft + "</h2>";
    gameOverHtml += "<div class='input-group mb-3'>"; 
    gameOverHtml += "<input type='text' class='form-control' placeholder='Enter Initials' aria-label='Enter Initials' aria-describedby='button-addon2'>";
    gameOverHtml += "<div class='input-group-append'>";
    gameOverHtml += "<button class='btn btn-outline-secondary' type='button' id='button-addon2'>Submit</button>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
    
    var initialInput = document.querySelector(".form-control");
    var submitButton = document.querySelector(".btn-outline-secondary");
    
    submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var user = { 
        initials: initialInput.value.trim()
    }

    localStorage.setItem("user", JSON.stringify(user));

    var userInitial = document.querySelector("#form.control");
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userInitial.textcontent = lastUser.initials + timeLeft;
});


}

var questions = [
    new Question ("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question ("The condition in an if/else statement is enclosed within _____", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses"),
    new Question ("Arrays in JavaScript can be used to store _____", ["numbers", "booleans", "other arrays", "all of the above"], "all of the above"),
    new Question ("String values must be enclosed within ____ when being assigned to variables", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question ("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "terminal/bash", "for loops", "console.log"], "console.log")
    ];

    var quiz = new Quiz (questions);

populate ();
