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

function game() {
    let res=0;
    let i=0;
    let msg="";
    while (i<5) {
        let iota=prompt(msg+`Round ${i+1}\nChoose between rock, paper and scissors`);
        iota=oneRound(iota, getComputerChoice());
        while (iota===-2) {
            iota=prompt(msg+`Round ${i+1}\nWrong selection, try again\nChoose between rock, paper and scissors`);
            iota=oneRound(iota, getComputerChoice());
        }
        res+=iota;
        i+=1;
        if (iota===1) {
            msg="You have won last round\n";
            console.log("ok");
        }
        else if (iota===0) {
            msg="The last round was a draw\n";
        }
        else {
            msg="You have lost last round\n";
        }
    }
    if (res>0) {
        let iota=prompt(msg+"Congratulations, you have won!\nPress OK to leave")
    }
    else if (res==0) {
        let iota=prompt(msg+"It's a draw\nPress OK to leave")
    }
    else {
        let iota=prompt(msg+"You have lost\nPress OK to leave")
    }
}

//console.log(Math.floor(Math.random()*3)+1);
//console.log(getComputerChoice());
//oneRound("scissors", "paper");
//oneRound("rock", "rock");
//oneRound("scissors", "rock");
game();