
function randomInt(){
    return Math.floor(Math.random() * 3)
};

function getComputerChoice(){
    switch(randomInt()){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
};
/* console.log("Computer threw " + computerChoice) */

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    /*console.log("You threw " + x)
    console.log("Computer threw " + y)*/
    if(playerChoice == computerChoice){
        return "Draw";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
        return "You Win!";
    } else {
        return "You lose";
    };
};
/*
function game(){
    for(let i = 1; i <= 5; i ++){
        let z = 1
        do {
            if(z > 1){
                playerChoice = prompt("Error: Please type either rock, paper, or scissors")
            } else {
                playerChoice = prompt("Rock Paper Scissors")
            }
            z++
        }while (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors")
        computerChoice = getComputerChoice()
        console.log(playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase()))
    }
}
*/
function playRock(){
    console.log(playRound("rock"));
}

function playPaper(){
    console.log(playRound("paper"));
}

function playScissors(){
    console.log(playRound("scissors"));
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissors);

