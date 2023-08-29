let computerChoice = ""
let playerChoice = ""
function randomInt(){
    return Math.floor(Math.random() * 3)
}

function getComputerChoice(){
    switch(randomInt()){
        case 0:
            computerChoice = "Rock"
            break
        case 1:
            computerChoice = "Paper"
            break
        case 2:
            computerChoice = "Scissors"
    }
}
getComputerChoice()
console.log("Computer threw " + computerChoice)