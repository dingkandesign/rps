//create array of acceptable choices
const choiceArray = ['ROCK', 'PAPER', 'SCISSORS'];
//initialize global variables
let computerWins = 0;
let playerWins = 0;
let ties = 0;

//generate computer choice; make it random choice of three; uppercase for comparison
function getComputerChoice() {
    return choiceArray[Math.floor(Math.random()*choiceArray.length)].toUpperCase();
}
//play round
function playRound() {
    let computerChoice = getComputerChoice();
    //prompt player choice
    let playerChoice = prompt('Rock, paper, scissors, shoot!').toUpperCase();
    //make sure player chose an acceptable choice
    let playerApprovedChoice = choiceArray.some(choice => playerChoice.includes(choice));
    //prompt player if their choice is NOT acceptable
    while (!playerApprovedChoice) {
        playerChoice = prompt('Please enter a valid choice: rock, paper, or scissors').toUpperCase();
        playerApprovedChoice = choiceArray.some(choice => playerChoice.includes(choice));
    }
    //check result, notify round result, update win counters
    switch (true) {
        case (playerChoice === computerChoice):
            alert('Tie');
            ties += 1;
            return 'Tie';
            break;
        case (playerChoice === 'ROCK' && computerChoice === 'PAPER'):
        case (playerChoice === 'PAPER' && computerChoice === 'SCISSORS'):
        case (playerChoice === 'SCISSORS' && computerChoice === 'ROCK'):
            alert ('Computer wins');
            computerWins += 1;
            return 'Computer Wins';
            break;
        case (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'):
        case (playerChoice === 'PAPER' && computerChoice === 'ROCK'):
        case (playerChoice === 'SCISSORS' && computerChoice === 'PAPER'):
            alert ('Player wins');
            playerWins += 1;
            return 'Player wins';
            break;
    }

}
console.log(playRound());
//play 5 round game
function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

//execute game
game();

//final results
alert('Computer: ' + computerWins + '\nPlayer: ' + playerWins + '\nTies: ' + ties);
