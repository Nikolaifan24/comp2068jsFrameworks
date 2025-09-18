const prompt = require('prompt');

// Start the prompt
prompt.start();

// Ask the user for input
prompt.get(['userSelection'], function (err, result) {
    if (err) {
        console.log("Error:", err);
        return;
    }

    let userSelection = result.userSelection.toUpperCase();

    // Generate computer selection
    let rand = Math.random();
    let computerSelection;

    if (rand <= 0.34) {
        computerSelection = "PAPER";
    } else if (rand <= 0.67) {
        computerSelection = "SCISSORS";
    } else {
        computerSelection = "ROCK";
    }

    // Show selections
    console.log("User Selection:", userSelection);
    console.log("Computer Selection:", computerSelection);

    // Determine winner
    if (userSelection === computerSelection) {
        console.log("It's a tie");
    } else if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (userSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        console.log("User Wins");
    } else {
        console.log("Computer Wins");
    }
});