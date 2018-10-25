// safeguarding for writing jquery
$(document).ready(function () {

    // starting variables for wins, losses and jewels
    var computerPick = "";
    var wins = 0;
    var losses = 0;
    var red = "";
    var blue = "";
    var yellow = "";
    var green = "";
    var userScore = 0;

    // gamestart function for picking random value between 1 and 12 for each jewel and 19 and 120 for the 
    function gameStart() {
        red = Math.floor(Math.random() * 12) + 1;
        blue = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;
        computerPick = Math.floor(Math.random() * 101) + 19;
        $("#random-area").html(computerPick);
        $("#score-area").html(userScore);
        // console logging to make sure random numbers are being chosen
        console.log("red gem is " + red);
        console.log("blue gem is " + blue);
        console.log("green gem is " + green);
        console.log("yellow gem is " + yellow);
        console.log("computer pick is " + computerPick);
    };

    // on click for all gem images
    $("#red").on("click", function () {
        var currentScore = userScore += red;
        $("#score-area").html(currentScore);
        console.log("red click is " + currentScore);
        winCheck();
    });

    $("#blue").on("click", function () {
        var currentScore = userScore += blue;
        $("#score-area").html(currentScore);
        console.log("blue click is " + currentScore);
        winCheck();
    });

    $("#yellow").on("click", function () {
        var currentScore = userScore += yellow;
        $("#score-area").html(currentScore);
        console.log("yellow click is " + currentScore);
        winCheck();
    });

    $("#green").on("click", function () {
        var currentScore = userScore += green;
        $("#score-area").html(currentScore);
        console.log("green click is " + currentScore);
        winCheck();
    });


    // define win check and set parameters for a win, loss or to keep going
    function winCheck() {
        if (userScore === computerPick) {
            wins++;
            $("#wins").html("Wins: " + wins);
            alert("Winning isn’t everything, it’s the ONLY thing");
            newGame();
        }

        else if (userScore > computerPick) {
            losses++;
            $("#losses").html("Losses: " + losses);
            alert("...if you ain't first, you're last");
            newGame();
        };
    };
    // function that allows a new game user score reset and start back at zero
    function newGame() {
        userScore = 0;
        gameStart();
    };
    // starts the game
    gameStart();

});