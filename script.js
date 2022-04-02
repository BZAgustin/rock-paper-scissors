// Score variables
let myScore = 0;
let botScore = 0;

// Target the 3 main game buttons and computer buttons
const pRock = document.querySelector('#pRock');
const pPaper = document.querySelector('#pPaper');
const pScissors = document.querySelector('#pScissors');

const cRock = document.querySelector('#cRock');
const cPaper= document.querySelector('#cPaper');
const cScissors = document.querySelector('#cScissors');

// Target notifications and game score
const score = document.querySelector('#score');
const notif = document.querySelector('.notification');

// Listeners
pRock.addEventListener('click', (e) => {
    playRound(e);
});

pPaper.addEventListener('click', (e) => {
    playRound(e);

});

pScissors.addEventListener('click', (e) => {
    playRound(e);
});

// Randomly makes a choice for the bot
function botPickNumber() {
    let choice = Math.ceil(Math.random() * 3);
    if(choice === 1) {
        return "rock";
    } else if(choice === 2) {
        return "paper";
    } else return "scissors";
};

// Triggered whenever the player clicks on a choice
function playRound(e) {
    let playerChoice = e.target.id;
    let botChoice = botPickNumber();

    highlightChoices(e, botChoice);

    if(playerChoice === 'pRock') {
        if(botChoice === 'paper') {
            botScore++;
            score.textContent = `You  ${myScore} - ${botScore}  Computer`;
            notif.textContent = "Player loses. Paper beats Rock";
        } else if(botChoice === 'scissors') {
            myScore++;
            score.textContent = `You  ${myScore} - ${botScore}  Computer`;
            notif.textContent = "Player wins. Rock beats Scissors";
        } else {
            notif.textContent = "It's a Tie";
        }
    } else if(playerChoice === 'pPaper') {
        if(botChoice === 'scissors') {
            botScore++;
            score.textContent = `You  ${myScore} - ${botScore}  Computer`;
            notif.textContent = "Player loses. Scissors beat Paper";
        } else if(botChoice === 'rock') {
            myScore++;
            score.textContent = `You  ${myScore} - ${botScore}  Computer`;
            notif.textContent = "Player wins. Paper beats Rock";
        } else {
            notif.textContent = "It's a Tie";
        }
    } else {
        if(botChoice === 'rock') {
            botScore++;
            score.textContent = `You  ${myScore} - ${botScore}  Computer`;
            notif.textContent = "Player loses. Rock beats Scissors";
        } else if(botChoice === 'paper') {
            myScore++;
            score.textContent = `You  ${myScore} - ${botScore}  Computer`;
            notif.textContent = "Player wins. Scissors beat Paper";
        } else {
            notif.textContent = "It's a Tie";
        }
    }

    if(myScore === 5) {
       notif.textContent = "Player is the final winner!";
       myScore = 0;
       botScore = 0;
       score.textContent = `0 - 0`;
    } else if(botScore === 5) {
       notif.textContent = "Computer is the final winner!";
       myScore = 0;
       botScore = 0;
       score.textContent = `0 - 0`;
    }

    refreshItems();
}

// function checkWinner(myObj, botObj, winner) {
//     console.log(`${winner} wins. `);
// }

function highlightChoices(e, botChoice) {
    if(e.target.id === 'pRock') {
        pRock.style.border = "3px solid #fd6017";
        pRock.style.backgroundColor = "#ffcc6e";
    } else if(e.target.id === 'pPaper') {
        pPaper.style.border = "3px solid #fd6017";
        pPaper.style.backgroundColor = "#ffcc6e";
    } else if(e.target.id === 'pScissors') {
        pScissors.style.border = "3px solid #fd6017";
        pScissors.style.backgroundColor = "#ffcc6e";
    }

    // a bit of delay for the bot choice
   setTimeout(() => {
    if(botChoice === 'rock') {
        cRock.style.border = "3px solid #fd6017";
        cRock.style.backgroundColor = "#ffcc6e";
    } else if(botChoice === 'paper') {
        cPaper.style.border = "3px solid #fd6017";
        cPaper.style.backgroundColor = "#ffcc6e";
    } else if(botChoice === 'scissors') {
        cScissors.style.border = "3px solid #fd6017";
        cScissors.style.backgroundColor = "#ffcc6e";
    }
   }, 200);
}

function refreshItems() {
    setTimeout(() => {
        pRock.style.border = "3px solid #ff8410";
        pPaper.style.border = "3px solid #ff8410";
        pScissors.style.border = "3px solid #ff8410";
        pRock.style.backgroundColor = "white";
        pPaper.style.backgroundColor = "white"
        pScissors.style.backgroundColor = "white"

        cRock.style.border = "3px solid #ff8410";
        cPaper.style.border = "3px solid #ff8410";
        cScissors.style.border = "3px solid #ff8410";
        cRock.style.backgroundColor = "white";
        cPaper.style.backgroundColor = "white";
        cScissors.style.backgroundColor = "white";
    }, 2000);
};