function getComputerChoice() {
    let x=Math.floor(Math.random()*3)+1;
    if (x===1) {
        return "rock";
    }
    else if (x==2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function oneRound(playerSelection, computerSelection) {
    if (playerSelection==="rock") {
        if (computerSelection==="rock") {
            console.log("draw");
            return 0;
        }
        else if (computerSelection==="paper") {
            console.log("computer wins");
            return -1;
        }
        else {
            console.log("you win");
            return 1;
        }
    }
    else if (playerSelection==="scissors") {
        if (computerSelection==="scissors") {
            console.log("draw");
            return 0;
        }
        else if (computerSelection==="paper") {
            console.log("you win");
            return -1;
        }
        else {
            console.log("computer wins");
            return 1;
        }
    }
    else if (playerSelection==="paper") {
        if (computerSelection==="paper") {
            console.log("draw");
            return 0;
        }
        else if (computerSelection==="scissors") {
            console.log("computer wins");
            return -1;
        }
        else {
            console.log("you win");
            return 1;
        }
    }
    else {
        console.log("wrong selection, try again");
        return -2;
    }
}

let playerResult=0;
let computerResult=0;

function playing(n) {
    const announcement=document.querySelector("#announcement");
    let eta=oneRound(n, getComputerChoice());
    if (eta==1) {
        playerResult+=1;
        announcement.textContent="you have won a round";
    }
    else if (eta==-1) {
        computerResult+=1;
        announcement.textContent="you have lost a round";
    }
    else {
        announcement.textContent="last round was a draw";
    }
    const scores=document.querySelector("#score");
    scores.textContent=playerResult+"-"+computerResult;
    if (computerResult>=5) {
        announcement.textContent="you have lost the game";
        playerResult=0;
        computerResult=0;
    }
    else if (playerResult>=5) {
        announcement.textContent="Congratulations, you have won the game";
        playerResult=0;
        computerResult=0;
    }
}

const rock_button=document.querySelector("#rock");
rock_button.addEventListener("click", ()=>{playing("rock");});
const paper_button=document.querySelector("#paper");
paper_button.addEventListener("click", ()=>{playing("paper");});
const scissors_button=document.querySelector("#scissors");
scissors_button.addEventListener("click", ()=>{playing("scissors");});

// function game() {
//     let res=0;
//     let i=0;
//     let msg="";
//     while (i<5) {
//         //let iota=prompt(msg+`Round ${i+1}\nChoose between rock, paper and scissors`);
//         iota=oneRound(iota, getComputerChoice());
//         while (iota===-2) {
//             iota=prompt(msg+`Round ${i+1}\nWrong selection, try again\nChoose between rock, paper and scissors`);
//             iota=oneRound(iota, getComputerChoice());
//         }
//         res+=iota;
//         i+=1;
//         if (iota===1) {
//             msg="You have won last round\n";
//             console.log("ok");
//         }
//         else if (iota===0) {
//             msg="The last round was a draw\n";
//         }
//         else {
//             msg="You have lost last round\n";
//         }
//     }
//     if (res>0) {
//         let iota=prompt(msg+"Congratulations, you have won!\nPress OK to leave")
//     }
//     else if (res==0) {
//         let iota=prompt(msg+"It's a draw\nPress OK to leave")
//     }
//     else {
//         let iota=prompt(msg+"You have lost\nPress OK to leave")
//     }
// }

//console.log(Math.floor(Math.random()*3)+1);
//console.log(getComputerChoice());
//oneRound("scissors", "paper");
//oneRound("rock", "rock");
//oneRound("scissors", "rock");
//game();