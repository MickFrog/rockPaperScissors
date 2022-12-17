//Get case insensitive user input
function capitalise(capWord) {
    let newWord = capWord.charAt(0).toUpperCase() + capWord.slice(1).toLowerCase();
    return newWord;
}

let playerChoice = capitalise(prompt("Rock Paper Scissors"));
// console.log(playerChoice);

//Random Computer Choice
const choices = ["Rock", "Paper", "Scissors"];

let computerChoice = choices[Math.floor(Math.random()*choices.length)];

// console.log(computerChoice);

//Process game round against rules
if(playerChoice == computerChoice) {
    console.log("You draw. Please Refresh to play again.");
} else if((playerChoice == "Rock" && computerChoice == "Scissors") 
    || (playerChoice == "Paper" && computerChoice == "Rock") 
    || (playerChoice == "Scissors" && computerChoice == "Paper")) {

console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
} else {

    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
}
