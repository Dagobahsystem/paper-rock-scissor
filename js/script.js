
//randomly return rock, paper or scissors
function computerPlay() {

    let randNum = Math.floor(Math.random()*100) + 1;

    if(randNum <= 33) {
        return "rock";
    } else if(randNum > 34 && randNum <= 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!

    // different option of the rock, paper, scissors criteria

    if(computerSelection == "rock" && playerSelection == "paper") {
        return "You Win! Paper beats Rock";
    } else if(computerSelection == "rock" && playerSelection == "scissor") {
        return "You Lose! Rock beats Scissor. FINISHED!";
    } else if(computerSelection == "paper" && playerSelection == "rock") {
        return "You Lose! Paper beats Rock. GET BENT!";
    } else if(computerSelection == "paper" && playerSelection == "scissor") {
        return "You Win! Scissor beats Paper";
    } else if(computerSelection == "scissor" && playerSelection == "paper") {
        return "You Lose! Scissor beats Paper. KARATE CHOP!"
    } else if(computerSelection == "scissor" && playerSelection == "rock") {
        return "You Win! Rock beats Scissor"
    } else {
        return "Cannot Compute!"
    }
  } 
  
  const playerSelection = prompt("Let's Play Rock, Paper Scissors.  What will you choose?").toLowerCase();
  const computerSelection = computerPlay();
  console.log("Computer Selection: " + computerSelection);
  console.log("Player Selection: " + playerSelection);
  console.log(playRound(playerSelection, computerSelection));
