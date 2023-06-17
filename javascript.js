function getComputerChoice() {

    let choice = randomIntFromInterval(1, 3);
    switch (choice) {
        case 1:
            return ("rock");
            break;
        case 2:
            return ("paper");
            break;
        case 3:
            return ("scissors");
            break;
    }

}

function playRound(playerSelection, computerSelection) {

    switch (computerSelection) {
        case "rock":
            if (playerSelection == "paper") {
                return (playerWins(playerSelection, computerSelection));
            }
            else {
                return (playerLoses(playerSelection, computerSelection));
            }
            break;

        case "paper":
            if (playerSelection == "scissors") {
                return (playerWins(playerSelection, computerSelection));
            }
            else {
                return (playerLoses(playerSelection, computerSelection));
            }

            break;

        case "scissors":
            if (playerSelection == "rock") {
                return (playerWins(playerSelection, computerSelection));
            }
            else {
                return (playerLoses(playerSelection, computerSelection));
            }

            break;
    }

}

function playerWins(playerSelection, computerSelection) {
    return ("You win! " + playerSelection + " beats " + computerSelection);
}

function playerLoses(playerSelection, computerSelection) {
    return ("You lose! " + computerSelection + " beats " + playerSelection);
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Please enter your choice", "");
playRound(playerSelection.toLowerCase(), computerSelection);


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log("Computer chose " + computerSelection);
console.log("You chose " + playerSelection);
console.log(playRound(playerSelection, computerSelection));