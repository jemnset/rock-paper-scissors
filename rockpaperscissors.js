let playOptions = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const section = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

section.appendChild(rockBtn);
section.appendChild(paperBtn);
section.appendChild(scissorsBtn);

document.body.appendChild(section);

const resultsSection = document.createElement("div");
document.body.appendChild(resultsSection);

rockBtn.addEventListener("click", ()=> {
    playRound(0, getComputerChoice());
});

paperBtn.addEventListener("click", ()=> {
    playRound(1, getComputerChoice());
});

scissorsBtn.addEventListener("click", ()=> {
    playRound(2, getComputerChoice());
});

function getComputerChoice() {
    return random(playOptions);
}

function random(options) {
    return Math.floor(Math.random() * (0,options.length));
}

const humanChoiceText = document.createElement("p");
const computerChoiceText = document.createElement("p");
const resultText = document.createElement("p");
const tallyText = document.createElement("p");
const winnerText = document.createElement("p");

resultsSection.appendChild(humanChoiceText);
resultsSection.appendChild(computerChoiceText);
resultsSection.appendChild(resultText);

function playRound(humanChoice, computerChoice){

    humanChoiceText.textContent = "Human: " + playOptions[humanChoice];
    computerChoiceText.textContent = "Computer: " + playOptions[computerChoice];

    calculateWinner(humanChoice, computerChoice);

    if(humanScore === 5 || computerScore === 5){
        if(humanScore === computerScore)
            resultText.textContent = `It was a draw! Human: ${humanScore} | Computer: ${computerScore}`;
        else if(humanScore > computerScore){
            resultText.textContent = `Human beat the computer! Human: ${humanScore} | Computer: ${computerScore}`;
        }else{
            resultText.textContent = `Sorry the computer beat the human! Human: ${humanScore} | Computer: ${computerScore}`;
        }
        //reset the game
        humanScore = 0;
        computerScore = 0;
    }else{
        resultText.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }
}

function calculateWinner(humanChoice, computerChoice){
   
    if(humanChoice != computerChoice){
        if(((humanChoice + 2) % 3) === ((computerChoice + 1) % 3)){
            computerScore++;
        }
        else{
            humanScore++;
        }
    }
}

