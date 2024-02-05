// This is a JavaScript file
// Author: Renan Medeiros
// Description: Javascript for simple Rock Paper Scissors game.

function getRandomNumber() {
    const min = 1;
    const max = 3;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);

    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getComputerChoice (randomNumber) {
    switch(randomNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}

let computerChoice = getComputerChoice (getRandomNumber());
console.log(computerChoice);