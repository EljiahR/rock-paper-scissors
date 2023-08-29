
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
const computerChoice = getComputerChoice()
const playerChoice = "rock"
/* console.log("Computer threw " + computerChoice) */

function playRound(x, y){
    console.log("You threw " + x)
    console.log("Computer threw " + y)
    if(x == y){
        return "Draw"
    } else if ((x == "rock" && y == "scissors") || (x == "paper" && y == "rock") || (x == "scissors" && y == "paper")){
        return "You Win!"
    } else {
        return "You lose"
    }
}
console.log(playRound(playerChoice.toLowerCase(),computerChoice.toLowerCase()))