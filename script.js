// Simple rock paper scissors game played in the console

// Define global score variables and number of points needed to win
let playerScore = 0;
let computerScore = 0;
const winCondition = 5;

console.log("First to " + winCondition + " wins the match.")

function getCompChoice() {
  // Function to randomly determine the computer's RPS choice
  // First get random integer 0, 1, or 2
  let compChoice = Math.floor(Math.random() * 3);

  // Assign computer's choice depending on the integer
  switch (compChoice) {
  case 0:
    compChoice = "rock";
    break;
  case 1:
    compChoice = "paper";
    break;
  case 2:
    compChoice = "scissors";
    break;
  }
    
  return compChoice;
}

function getPlayerChoice() {
  // Function to determine the player's RPS choice
  // Prompt player for choice, then trim whitespace and make lower case
  let playerChoice =
    prompt("Enter your choice: rock, paper, or scissors").trim().toLowerCase();

  // If player doesn't enter a valid choice, keep prompting
  // until choice is valid
  while (
    !(playerChoice == "rock" ||
      playerChoice == "paper" ||
      playerChoice == "scissors")) {
        playerChoice = prompt("Please enter either: rock, paper, or scissors");
        playerChoice = playerChoice.trim().toLowerCase();
      }
    
  return playerChoice;
}

function playRound() {
  // Function to compare choices between computer and player and increment
  // scores accordingly
    
  // Call choice functions and assign comp and player choices to variables
  const compSelection = getCompChoice();
  const playerSelection = getPlayerChoice();
    
  console.log("Computer: " + compSelection + "     You: " + playerSelection);

  // Compare results and increment scores (unless a draw occurs)
  if (playerSelection == compSelection) {
    console.log("This round is a draw")
  } else if (playerSelection == "rock") {
    if (compSelection == "paper") {
      computerScore++;
      console.log("You lose this round");
    } else {
      playerScore++;
      console.log("You win this round");
    }
  } else if (playerSelection == "paper") {
    if (compSelection == "scissors") {
      computerScore++;
      console.log("You lose this round");
    } else {
      playerScore++;
      console.log("You win this round");
    }
  } else if (playerSelection == "scissors") {
    if (compSelection == "rock") {
      computerScore++;
      console.log("You lose this round");
    } else {
      playerScore++;
      console.log("You win this round");
    }
  }
    
  console.log("Your score = " + playerScore
    + "     Computer score = " + computerScore);
}

function playGame() {
  // First to the number of points equal to the value of winCondition wins
  // If neither comp nor player has enough points, keep playing
  while (!(playerScore == winCondition || computerScore == winCondition)) {
    playRound();
  }
  if (playerScore == winCondition) {
    console.log("Congrats, you win the match")
  } else {
    console.log("Sorry, you lose the match")
  }
}

playGame();
