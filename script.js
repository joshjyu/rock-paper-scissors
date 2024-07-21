const winCondition = 5;
let playerScore = 0;
let computerScore = 0;

const winConditionStatement = document.querySelector(".winCondition");
winConditionStatement.textContent = `The first to win ${winCondition} rounds is the winner.`;

let playerChoice;
let compChoice;
let buttonWrapper = document.querySelector(".buttonWrapper");

buttonWrapper.addEventListener("click", (event) => {
  let target = event.target;

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

let result = document.querySelector("#result");
let score = document.querySelector("#score");
let showChoices = document.querySelector("#showChoices");
let winnerDecl = document.createElement("p");
let roundCount = 1;
showChoices.setAttribute("style", "white-space: pre;");
score.setAttribute("style", "white-space: pre;");
winnerDecl.style.cssText = "font-weight: bold;";

function playRound() {
  showChoices.textContent = `Round Number ${roundCount}\r\n\r\n`;
  showChoices.textContent += `Computer choice: ${compChoice}\r\n`;
  showChoices.textContent += `Player choice: ${playerChoice}`;

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

  if (playerScore == winCondition || computerScore == winCondition)
    checkWinner();
}

function checkWinner() {
  const allButtons = document.querySelectorAll("button");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }

  if (playerScore == winCondition) {
    winnerDecl.textContent = "You win the match";
  } else {
    winnerDecl.textContent = "You lose the match";
  }

  score.appendChild(winnerDecl);
}
