let playerScore = 0;
let compScore = 0;
const winCondition = 5;

console.log("First to " + winCondition + " wins the match.")

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
    const compSelection = getCompChoice();
    const playerSelection = getPlayerChoice();
    
    console.log("Computer: " + compSelection + "     You: " + playerSelection);

    // Determine results and adjust scores
    if (playerSelection == compSelection) {
        console.log("Result = Draw")
    } else if (playerSelection == "rock") {
        if (compSelection == "paper") {
            compScore++;
            console.log("You lose this round");
        } else {
            playerScore++;
            console.log("You win this round");
        }
    } else if (playerSelection == "paper") {
        if (compSelection == "scissors") {
            compScore++;
            console.log("You lose this round");
        } else {
            playerScore++;
            console.log("You win this round");
        }
    } else if (playerSelection == "scissors") {
        if (compSelection == "rock") {
            compScore++;
            console.log("You lose this round");
        } else {
            playerScore++;
            console.log("You win this round");
        }
    }
    
    console.log("Your score = " + playerScore + "     Computer score = " + compScore);
    
}

function playGame() {
    // First to x points wins
    while (!(playerScore == winCondition || compScore == winCondition)) {
        playRound();
    }
    if (playerScore == winCondition) {
        console.log("Congrats, you win the match")
    } else {
        console.log("Sorry, you lose the match")
    }
}

playGame();
