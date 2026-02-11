const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");

function disableButtons() {
    const buttons = document.querySelectorAll("button"); 
    buttons.forEach(button => button.disabled = true);
}

rockBtn.addEventListener("click", (event) => {
    playRound("rock",getComputerChoice());
    

});

paperBtn.addEventListener("click", (event) => {
    playRound("paper",getComputerChoice());


});

scissorsBtn.addEventListener("click", (event) => {
    playRound("scissors",getComputerChoice());


})

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

let humanScore = 0;
let computerScore = 0;
    

function playRound(humanChoice, computerChoice) {

    humanValue = humanChoice.toLowerCase();
    computerValue = computerChoice.toLowerCase();

    if(humanValue === computerValue){
        
        const result = "Draw!\n"
        resultDiv.textContent = result + "\n Human Score is: " + humanScore + " Computer Score is: " + computerScore;

    }
    else if((humanValue === "rock") && (computerValue === "scissors")){
       const result = "You win! Rock beats Scissors";
        humanScore += 1;
        resultDiv.textContent = result + " \nHuman Score is: " + humanScore + " Computer Score is: " + computerScore;
        
    }
     else if((humanValue === "paper") && (computerValue === "rock")){
        const result = "You win! Paper beats rock";
        humanScore += 1;
        resultDiv.textContent = result + " \nHuman Score is: " + humanScore + " Computer Score is: " + computerScore;

       
    }
     else if((humanValue === "scissors") && (computerValue === "paper")){
        const result = "You win! Scissors beats paper";
        humanScore += 1;
        resultDiv.textContent = result + " \nHuman Score is: " + humanScore + " Computer Score is: " + computerScore;

        
    }
     else if((computerValue === "rock") && (humanValue === "scissors")){
        const result = "You lose! Rock beats Scissors";
        computerScore += 1;
        resultDiv.textContent = result + " \nHuman Score is: " + humanScore + " Computer Score is: " + computerScore;
        
       
    }
     else if((computerValue === "paper") && (humanValue === "rock")){
        const result = "You lose! Paper beats rock";
        computerScore += 1;
        resultDiv.textContent = result + " \nHuman Score is: " + humanScore + " Computer Score is: " + computerScore;

     }
     else{
        const result = "You lose! Scissors beats paper";
        computerScore += 1;
        resultDiv.textContent = result + " \nHuman Score is: " + humanScore + " Computer Score is: " + computerScore;
        
       
    }

    if(humanScore == 5){
        resultDiv.textContent = "Human win!";
        disableButtons();
        return;
        
    }
    if(computerScore == 5){
        resultDiv.textContent = "Computer win!";
        disableButtons();
        return;
       
     }
     

}



