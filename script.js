function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.log("Invalid choice");
            break;
    }
}

function getHumanChoice(){
    
    let choice = prompt("Pick Rock, Paper or Scissors","Rock");
    
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanValue = humanChoice.toLowerCase();
    computerValue = computerChoice.toLowerCase();

    if(humanValue === computerValue){
        console.log("Draw!")
    }
    else if((humanValue === "rock") && (computerValue === "scissors")){
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
    }
     else if((humanValue === "paper") && (computerValue === "rock")){
        console.log("You win! Paper beats rock");
        humanScore += 1;
    }
     else if((humanValue === "scissors") && (computerValue === "paper")){
        console.log("You win! Scissors beats paper");
        humanScore += 1;
    }
     else if((computerValue === "rock") && (humanValue === "scissors")){
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    }
     else if((computerValue === "paper") && (humanValue === "rock")){
        console.log("You lose! Paper beats rock");
        computerScore += 1;
     }
     else{
        console.log("You win! Scissors beats paper");
        computerScore += 1;
     }
}

function playGame(){
    
    function playRound(humanChoice, computerChoice) {

    humanValue = humanChoice.toLowerCase();
    computerValue = computerChoice.toLowerCase();

    if(humanValue === computerValue){
        console.log("Draw!")
    }
    else if((humanValue === "rock") && (computerValue === "scissors")){
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
    }
     else if((humanValue === "paper") && (computerValue === "rock")){
        console.log("You win! Paper beats rock");
        humanScore += 1;
    }
     else if((humanValue === "scissors") && (computerValue === "paper")){
        console.log("You win! Scissors beats paper");
        humanScore += 1;
    }
     else if((computerValue === "rock") && (humanValue === "scissors")){
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    }
     else if((computerValue === "paper") && (humanValue === "rock")){
        console.log("You lose! Paper beats rock");
        computerScore += 1;
     }
     else{
        console.log("You win! Scissors beats paper");
        computerScore += 1;
     }
}

    for(let i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

    console.log("Human Score is:",humanScore);
    console.log("Computer Score is:",computerScore);

    if(humanScore > computerScore){
        console.log("Human Win!");
    }
    else{
        console.log("Computer Win!");
    }
}


playGame();