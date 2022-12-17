//Get case insensitive user input
let UserChoice = prompt("Rock Paper Scissors");

function capitalise(capWord) {
    let newWord = capWord.charAt(0).toUpperCase() + capWord.slice(1).toLowerCase();
    return newWord;
}

let playerChoice = capitalise(UserChoice);
console.log(playerChoice);

//Random Computer Choice
const choices = ["Rock", "Paper", "Scissors"];

let computerChoice = choices[Math.floor(Math.random()*choices.length)];

console.log(computerChoice);