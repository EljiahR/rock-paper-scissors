
function randomInt(){
    return Math.floor(Math.random() * 3)
}

function getComputerChoice(){
    switch(randomInt()){
        case 0:
            return "Rock"
            break
        case 1:
            return "Paper"
            break
        case 2:
            return "Scissors"
    }
}
let computerChoice = getComputerChoice()
let playerChoice = "rock"
/* console.log("Computer threw " + computerChoice) */

function playRound(x, y){
    /*console.log("You threw " + x)
    console.log("Computer threw " + y)*/
    if(x == y){
        return "Draw"
    } else if ((x == "rock" && y == "scissors") || (x == "paper" && y == "rock") || (x == "scissors" && y == "paper")){
        return "You Win!"
    } else {
        return "You lose"
    }
}

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
game()