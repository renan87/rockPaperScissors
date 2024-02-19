// This is a JavaScript file
// Author: Renan Medeiros
// Description: Javascript for simple Rock Paper Scissors game.

function getRandomNumber() {
    const min = 1;
    const max = 3;
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getComputerChoice() {
    const randomNumber = getRandomNumber();
    switch(randomNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getPlayerChoice() {
    let string = prompt("Please enter either Rock, Paper or Scissors as your choice:");
   
    while (string !== "Rock" && string !== "Paper" && string !== "Scissors")
        string = prompt("Entered wrong value. Please enter either Rock, Paper or Scissors as your choice:")
    
    return string;
}

function findWinner(humanPlayer,aiPlayer) {
    if(humanPlayer === aiPlayer)
        return "tie";
    else if(
    (humanPlayer === "Rock" && aiPlayer === "Scissors") ||
    (humanPlayer === "Scissors" && aiPlayer === "Paper") ||
    (humanPlayer === "Paper" && aiPlayer === "Rock")) 
    {
        return "human";
    }
    else
        return "ai";
}

function getWinningMessage(winnerChoice) {

    switch (winnerChoice) {
        case "Rock":
            return "Rock crushes Scissors";
        case "Paper":
            return "Paper covers Rock";
        case "Scissors":
            return "Scissors cuts Paper";
        default:
            return "Unknown result";
    }
}

function playRound() {

    let humanPlayer = getPlayerChoice();
    let aiPlayer = getComputerChoice();
    let result = findWinner(humanPlayer,aiPlayer);

    console.log(result);

    while(result === "tie") {
        console.log("It is a tie, play again.");
        humanPlayer = getPlayerChoice();
        aiPlayer = getComputerChoice();
        result = findWinner(humanPlayer,aiPlayer);
    }
    console.log(humanPlayer);
    console.log(aiPlayer);

    if(result === "human") {
        console.log(`You win! ${getWinningMessage(humanPlayer)}.`);
    }
    else {
        console.log(`You loose! ${getWinningMessage(aiPlayer)}.`);
    }
    return result;  
}

function playGame() {
    let playerScore = 0;
    let aiScore = 0;

    for (let i = 0; i < 5; i++)
    {
        console.log(`Game ${i + 1}:`);
        let result = playRound();
        
        if (result === "human") {
            playerScore++;
        } else if (result === "ai") {
            aiScore++;
        }
    }
    console.log(`Final Score:  Player:${playerScore}, ai:${aiScore}.`)
    if (playerScore > aiScore) {
        console.log("Player Wins. ");
    }
    else {
        console.log("AI Wins. ");
    }
}

playGame();