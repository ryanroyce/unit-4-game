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
        $("#screen").html(computerPick);
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
        var redClick = userScore += red;
        $("#score-area").html(redClick);
        console.log("red click is " + redClick);
    });



    gameStart();
});