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

/**function getHumanChoice() {
    let choice = prompt(
    "Make a choice! \n" +
    "0 - Rock \n" + 
    "1 - Paper \n" +
    "2 - Scissors \n" +
    "What do you want to play?");

    let userChoice = random(playOptions);

    if(isNaN(choice) || (Number(choice) != 0 && Number(choice) != 1 && Number(choice) != 2))
        console.log("This is not a valid choice! Randomly choosing for you!");
    else{
        userChoice = Number(choice);
    }

    return userChoice;f
}**/

function random(options) {
    return Math.floor(Math.random() * (0,options.length));
}

function playRound(humanChoice, computerChoice){

    console.log("Human chooses: " + playOptions[humanChoice]);
    console.log("Computer chooses: " + playOptions[computerChoice]);

    if(humanChoice === computerChoice){
        console.log("It's a draw!");
    }else if(((humanChoice + 2) % 3) === ((computerChoice + 1) % 3)){
        console.log(`Computer wins beacause ${playOptions[computerChoice]} beats ${playOptions[humanChoice]}`);
        computerScore++;
    }
    else{
        console.log(`You win beacause ${playOptions[humanChoice]} beats ${playOptions[computerChoice]}`);
        humanScore++;
    }
}

function playGame(){
    const MAX_GAMES = 5;
    let humanSelection;
    let computerSelection;

    for(let i=0; i< MAX_GAMES; i++){
        console.log(`Round ${i + 1}: `)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore === computerScore)
        console.log("It was a draw!");
    else if(humanScore > computerScore){
        console.log(`You beat the computer ${humanScore} to their ${computerScore}!`);
    }else{
        console.log(`Sorry the computer beat you ${computerScore} to your ${humanScore}!`);
    }
}

//playGame();
