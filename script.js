let playerScore = 0;
let compScore = 0;

function getCompChoice() {
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
    // Prompt player for RPS choice, then trim whitespace and make lower case
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
    // Call choice functions and assign comp and player choices to variables
    let compSelection = getCompChoice();
    let playerSelection = getPlayerChoice();
    
    console.log("Computer: " + compSelection + "     You: " + playerSelection);

    // Determine results and adjust scores
    if (playerSelection == compSelection) {
        console.log("Result = Draw")
    } else if (playerSelection == "rock") {
        if (compSelection == "paper") {
            compScore++;
            console.log("You lose");
        } else {
            playerScore++;
            console.log("You win");
        }
    } else if (playerSelection == "paper") {
        if (compSelection == "scissors") {
            compScore++;
            console.log("You lose");
        } else {
            playerScore++;
            console.log("You win");
        }
    } else if (playerSelection == "scissors") {
        if (compSelection == "rock") {
            compScore++;
            console.log("You lose");
        } else {
            playerScore++;
            console.log("You win");
        }
    }
    
    console.log("Your score = " + playerScore + "     Computer score = " + compScore);
    
}

function playGame() {
    playRound();
}

playGame();