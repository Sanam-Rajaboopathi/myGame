let userCount;
let computerCount;
const computerSelection = computerPlay();
const winner = game();
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    // console.log(randomNumber);
    switch(randomNumber){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Something went wrong";
    }
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    // if(playerSelection.equals(computerPlay)){

    // }
    let randomNumber = Math.floor(Math.random()*2);
    switch(randomNumber){
        case 0:
            return "You Lose! Computer Beats User";
            break;
        case 1:
            return "You Win! User beats Computer";
            break;
        default:
            return "Something went wrong";
    } 
}

function game(){
    let playResult = "";
    userCount = 0;
    computerCount = 0;
    for(let i=0; i<5; i++){
        const playerSelection = window.prompt();
        playResult = this.playRound(playerSelection, computerSelection);
        console.log(playResult)
        if( playResult.includes("You Win")){
            userCount = userCount + 1;
            console.log(userCount);
        }
        else {
            computerCount = computerCount + 1;
            console.log(computerCount);
        }
    }
   
    if(userCount > computerCount){
        console.log("You Won the Game!");
    }
    else if(userCount < computerCount) {
        console.log("Computer Won the Game!");
    }

}
