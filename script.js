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
    //Process each selection
    if(userScore < 5 && computerScore < 5) {
        if(playerChoice == computerChoice) {
          message.textContent = "You draw.";
          return 2;
      } else if((playerChoice == "Rock" && computerChoice == "Scissors") 
          || (playerChoice == "Paper" && computerChoice == "Rock") 
          || (playerChoice == "Scissors" && computerChoice == "Paper")) {
      
          message.textContent =  `You win! ${playerChoice} beats ${computerChoice}.`;
          userScore++
      } else {
          message.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
          computerScore++;
      }
      userCard.textContent = userScore;
      pcCard.textContent = computerScore;

      //Display final results
      finalResults(userScore, computerScore);
    } 
}

function finalResults(user, comp) {
    if(user == 5 || comp == 5){
        if(user > comp) {
            message.textContent = "YOU ARE THE WINNER";
        } else {
            message.textContent = "YOU LOST THE GAME.";
        }
    }
}