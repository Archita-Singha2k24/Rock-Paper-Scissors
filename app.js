let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    randIdx =  Math.floor(Math.random() * 3) ;
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31" ;
}

const showWinner = (userWin , userChoice , compChoice) => {
     if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green" ; 
     } else {        
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red" ;
     }
    }

const playGame = (userChoice) => {
    // Generate computer choice;  --> modular way of programming , i.e., one problem per function
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        // Draw game
        drawGame();    
    } else {
        let userWin = true ;
        if(userChoice === "rock") {
            // either computer will choose scissors or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
             // either computer will choose scissors or rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // either computer will choose rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});
