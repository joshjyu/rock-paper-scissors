const winCondition = 5;
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let compChoice;

const winConditionStatement = document.querySelector(".winCondition");
winConditionStatement.textContent = `The first to win ${winCondition} rounds is the winner.`;

let buttonWrapper = document.querySelector(".buttonWrapper");

// Create one event listener around entire button wrapper
// Use separate target for each button and assign to player's choice
buttonWrapper.addEventListener("click", (event) => {
  let target = event.target;

  // Also calculate computer's choice (0, 1, or 2) while player chooses
  compChoice = Math.floor(Math.random() * 3);

  switch (target.id) {
    case "rock":
      playerChoice = 0;
      playRound();
      break;
    case "paper":
      playerChoice = 1;
      playRound();
      break;
    case "scissors":
      playerChoice = 2;
      playRound();
      break;
  }
});

// Array of string versions of choices for reference within playRound()
const choices = ["rock", "paper", "scissors"];

let result = document.querySelector("#result");
let score = document.querySelector("#score");
let showChoices = document.querySelector("#showChoices");
let winnerDecl = document.createElement("p");
let roundCount = 1;

// "white-space: pre" so that new lines wrap text appropriately in playRound
showChoices.setAttribute("style", "white-space: pre;");
score.setAttribute("style", "white-space: pre;");
winnerDecl.style.cssText = "font-weight: bold;";

function playRound() {
  showChoices.textContent = `Round Number ${roundCount}\r\n\r\n`;
  showChoices.textContent += `Computer choice: ${choices[compChoice]}\r\n`;
  showChoices.textContent += `Player choice: ${choices[playerChoice]}`;

  // Compare choices, declare results, increment scores (unless a draw)
  // Logic just uses numbers instead of strings
  // 0 = rock, 1 = paper, 2 = scissors
  if (playerChoice == compChoice) {
    result.textContent = "This round is a draw";
  } else if (compChoice - playerChoice == 1) {
    computerScore++;
    result.textContent = "You lose this round";
  } else if (compChoice - playerChoice == -1) {
    playerScore++;
    result.textContent = "You win this round";
  } else if (compChoice - playerChoice == 2) {
    playerScore++;
    result.textContent = "You win this round";
  } else if (compChoice - playerChoice == -2) {
    computerScore++;
    result.textContent = "You lose this round";
  }

  roundCount++;
  score.textContent = `Computer score = ${computerScore}\r\n`;
  score.textContent += `Player score = ${playerScore}`;

  // Once the win condition has been reached by player or comp, call checkWinner
  if (playerScore == winCondition || computerScore == winCondition)
    checkWinner();
}

function checkWinner() {
  // First, disable buttons since game has ended
  const allButtons = document.querySelectorAll("button");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }

  // Declare winner and append to score declaration
  if (playerScore == winCondition) {
    winnerDecl.textContent = "You win the match";
  } else {
    winnerDecl.textContent = "You lose the match";
  }

  score.appendChild(winnerDecl);
}
