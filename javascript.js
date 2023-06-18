let computerWins = 0;
let playerWins = 0;

function game(playerSelection) {


    let computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);


    if (outcome == true) {
        playerWins++;
        // console.log(playerWin(playerSelection, computerSelection));
    }
    else if (outcome == false) {
        // console.log(playerLoss(playerSelection, computerSelection));
        computerWins++;
    }
    else if (outcome == null) {
        // console.log("Draw!");
    }
    console.log("You have " + playerWins + " wins!");
    console.log("Computer has " + computerWins + " wins!");

    if (playerWins > 4) {
        console.log("You won!");
        resetGame();
    }
    else if(computerWins > 4){
        console.log("You lose!");
        resetGame();
    }
}

function resetGame(){
    computerWins = 0;
    playerWins = 0;
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

function playerWin(playerSelection, computerSelection) {
    return ("You win! " + playerSelection + " beats " + computerSelection);
}

function playerLoss(playerSelection, computerSelection) {
    return ("You lose! " + computerSelection + " beats " + playerSelection);
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     while (playerWins < 5 && computerWins < 5) {
//         console.log("you have won" + playerWins + " times, computer has won " + computerWins);


//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt("Please enter your choice", "rock");
//         playerSelection = playerSelection.toLowerCase();
//         let outcome = playRound(playerSelection, computerSelection);

//         if (outcome == true) {
//             playerWins++;
//             // console.log(playerWin(playerSelection, computerSelection));
//         }
//         else if (outcome == false) {
//             // console.log(playerLoss(playerSelection, computerSelection));
//             computerWins++;
//         }
//         else if (outcome == null) {
//             // console.log("Draw!");
//         }
//         // console.log("You have " + playerWins + " wins!");
//         // console.log("Computer has " + computerWins + " wins!");
//     }
//     if (playerWins > 4) {
//         console.log("You won!");
//     }
//     else {
//         console.log("You lose!");
//     }

// }
