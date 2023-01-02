//Get button elements needed
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');

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

//Process game round against rules
function playRound(playerChoice, computerChoice) {
    //validate input
    if(!validateUserChoice(playerChoice)) {
        console.log("Invalid input. Point given to computer.")
        return 0;
    }

    if(playerChoice == computerChoice) {
        console.log("You draw.");
        return 2;
    } else if((playerChoice == "Rock" && computerChoice == "Scissors") 
        || (playerChoice == "Paper" && computerChoice == "Rock") 
        || (playerChoice == "Scissors" && computerChoice == "Paper")) {
    
    console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
    return 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
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
