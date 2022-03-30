function computerPlay() {
    let choice = Math.ceil(Math.random() * 3);
    if(choice === 1) {
        return "rock";
    } else if(choice === 2) {
        return "paper";
    } else return "scissors";
};

function playerPlay() {
    let play = prompt("Rock, paper or scissors?").toLowerCase();
    return play;
}

let player = playerPlay();
let bot = computerPlay();

console.log(`Player's choice: ${player}`);
console.log(`Computer's choice: ${bot}`);

function playRound(playerSelection, BotSelection) {
    if(playerSelection === "rock") {
        if(BotSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if(BotSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else return "It's a tie!";
    } else if(playerSelection === "paper") {
        if(BotSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else if(BotSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else return "It's a tie!";
    } else {
        if(BotSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if(BotSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else return "It's a tie!";
    }
};

console.log(playRound(player, bot));