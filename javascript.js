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

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getComputerChoice());