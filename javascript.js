
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


function playRound(playerChoice){
    let computerChoice = getComputerChoice();
  
    if(playerChoice == computerChoice){
        return "Draw";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
        yourScore++;
        return "You Win!";
        
    } else {
        computerScore++;
        return "You lose";
        
    };
};

let result = "";
function playRock(){
    result = playRound("rock");
    console.log(result);
    addResults(result);
}

function playPaper(){
    result = playRound("paper");
    console.log(result);
    addResults(result);
}

function playScissors(){
    result = playRound("scissors");
    console.log(result);
    addResults(result);
}

function addResults(result){
    let newResult = document.createElement('p');
    newResult.innerText = `${result} Score: ${yourScore}:${computerScore}`;
    results.appendChild(newResult);
    if(yourScore == 5 || computerScore == 5){
        let finalResults = document.createElement('p');
        if(yourScore > computerScore && yourScore ==5){
            finalResults.innerText="Final Results: YOU WIN!!!!";
        }else {
            finalResults.innerText="Final Results: You lose :(";
        }
        results.appendChild(finalResults);
    }
};

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const results = document.querySelector('.results');
let yourScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissors);

