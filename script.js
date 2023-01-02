//Get button elements needed
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');

//Get message and score cards elements
const message = document.getElementById('message');
const userCard = document.getElementById("userScore");
const pcCard = document.getElementById("pcScore");

//event listeners
rock.addEventListener('click', function() {
    playRound("Rock", getComputerChoice());
});

paper.addEventListener('click', function(){
    playRound("Paper", getComputerChoice());
});
scissors.addEventListener('click', function(){
    playRound("Scissors", getComputerChoice());
});

//Random Computer Choice
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

//scores
    let userScore = 0;
    let computerScore = 0;

//Process game round against rules
function playRound(playerChoice, computerChoice) {
      if(playerChoice == computerChoice) {
        message.textContent = "You draw.";
        return 2;
    } else if((playerChoice == "Rock" && computerChoice == "Scissors") 
        || (playerChoice == "Paper" && computerChoice == "Rock") 
        || (playerChoice == "Scissors" && computerChoice == "Paper")) {
    
        message.textContent =  `You win! ${playerChoice} beats ${computerChoice}.`;
    return 1;
    } else {
        message.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        return 0;
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;

    let result = playRound(getUserChoice(), getComputerChoice());

    if(result == 1) {
        userScore++;
    } else if(result == 0) {
        computerScore++;
    }
 
    if(userScore == computerScore) {
        console.log("WHAT A TOUGH GAME. IT WAS A DRAW");
    } else if(userScore > computerScore) {
        console.log("YOU ARE THE WINNER");
    } else {
        console.log("YOU LOST THE GAME.");
    }
}
