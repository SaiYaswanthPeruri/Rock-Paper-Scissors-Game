const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplays");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScoreCount= 0 ;
let computerScoreCount= 0 ;

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }else{
        switch(playerChoice){
            case "rock":
            result = (computerChoice === "scissors")? "YOU WON!":"YOU LOSE!"
            break; 
            case "paper":
            result = (computerChoice === "rock")? "YOU WON!":"YOU LOSE!"
            break; 
            case "scissors":
            result = (computerChoice === "paper")? "YOU WON!":"YOU LOSE!"
            break;        
        }
    }

      resultDisplay.classList.remove("greenText" ,"redText" )
     

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WON!":
            resultDisplay.classList.add("greenText");
        break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
        break;

    }

    switch(result){
        case "YOU WON!":
            playerScoreCount+= 1;
            playerScoreDisplay.textContent=playerScoreCount;
        break;
        case "YOU LOSE!": 
            computerScoreCount+= 1;
            computerScoreDisplay.textContent=computerScoreCount;
        break;

    }

}