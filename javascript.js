// This is a JavaScript file
// Author: Renan Medeiros
// Description: Javascript for simple Rock Paper Scissors game.

function getRandomNumber() {
    const min = 1;
    const max = 3;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);

    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getComputerChoice(randomNumber) {
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

function playRPS(humanPlayer,aiPlayer) {
    while (humanPlayer === aiPlayer) {
        console.log("It is a tie, play again.");
        humanPlayer = getPlayerChoice();
        aiPlayer = getComputerChoice();
    }
}


let computerChoice = getComputerChoice(getRandomNumber());
let playerChoice = getPlayerChoice();


console.log(computerChoice);
console.log(playerChoice);