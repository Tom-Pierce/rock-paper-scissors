function game() {
    let winCounter = 0;
    for (let i = 0; i < 5; i++) {

        
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Please enter your choice", "rock");
        playerSelection = playerSelection.toLowerCase();
        let outcome = playRound(playerSelection, computerSelection);

        if (outcome == true) {
            winCounter++;
            console.log(playerWins(playerSelection, computerSelection));
        }
        else if(outcome == false){
            console.log(playerLoses(playerSelection, computerSelection));
        }
        else if(outcome == null){
            i--;
            console.log("Draw!");
        }
        console.log(winCounter);
    }
    if (winCounter > 2) {
        console.log("You won!");
    }
    else{
        console.log("You lose!");
    }

}

function playRound(playerSelection, computerSelection) {

    switch (computerSelection) {
        case "rock":
            if (playerSelection == "paper") {
                return (true);
            }
            else if (playerSelection == "scissors") {
                return (false);
            }
            else {
                return (null);
            }
            break;

        case "paper":
            if (playerSelection == "scissors") {
                return (true);
            }
            else if (playerSelection == "rock") {
                return (false);
            }
            else {
                return (null);
            }
            break;

        case "scissors":
            if (playerSelection == "rock") {
                return (true);
            }
            else if (playerSelection == "paper") {
                return (false);
            }
            else {
                return (null);
            }
            break;
    }

}

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

function playerWins(playerSelection, computerSelection) {
    return ("You win! " + playerSelection + " beats " + computerSelection);
}

function playerLoses(playerSelection, computerSelection) {
    return ("You lose! " + computerSelection + " beats " + playerSelection);
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

game();
