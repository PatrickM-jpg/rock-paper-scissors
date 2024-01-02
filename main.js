// return random rock paper or scissors from computer
// have user enter rock paper scissors
// alert both answers in console and say who won
// make prompt accept uppercase and lowercase



function getComputerChoice () {
    let compChoice = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * (compChoice.length) + 1)

    if (randomChoice === 1) {
        return "rock";
    } if (randomChoice === 2) {
        return "paper";
    } if (randomChoice === 3) {
        return "scissors";
    }
}

let compScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){
   if (playerSelection === computerSelection){
    console.log("Tie");
    alert ("Tie, play again");
    game();
   }

   if (playerSelection === "rock" && computerSelection === "scissors"){
    playerScore += 1;
    console.log("You Win!");
   }
   if (playerSelection === "paper" && computerSelection === "rock"){
    playerScore += 1;
    console.log("You Win!");
   }
   if (playerSelection === "scissors" && computerSelection === "paper"){
    playerScore += 1;
    console.log("You Win!");
   }
   if (playerSelection === "rock" && computerSelection === "paper"){
    compScore += 1;
    console.log("You Lose!");
   }
   if (playerSelection === "paper" && computerSelection === "scissors"){
    compScore += 1;
    console.log("You Lose!");
   }
   if (playerSelection === "scissors" && computerSelection === "rock"){
    compScore += 1;
    console.log("You Lose!");
   }
}









// play game, run player selection vs computer selection and announce winner

    function game (){
    let playerSelection = prompt("Enter rock paper or scissors").toLowerCase();
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        alert('Please type rock, paper or scissors');
        playerSelection = prompt("Enter rock paper or scissors").toLowerCase();
    } console.log(`You Chose ${playerSelection}`);
    let computerSelection = getComputerChoice() 
        console.log(`Computer Chose ${computerSelection}`);
        return(playRound(playerSelection, computerSelection));
    }

    game();
    game();
    game();
    game();
    game();


    console.log(`Player Score is ${playerScore}`);
    console.log(`Computer Score is ${compScore}`);

 
// at the end of 5 rounds, announce who won 

function endGame (){
    if (playerScore >= 3) {
        console.log("Game Over! You won best of 5");
    }
    if (compScore >= 3) {
        console.log("Game Over! Computer won best of 5");
    }
}

endGame();


   











          
        
       
        



