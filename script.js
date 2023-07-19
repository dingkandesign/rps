//generate computer choice; make it random choice of three; uppercase for comparison
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random()*choiceArray.length)].toUpperCase();
}

function assignPlayerChoice(e) {
	playerChoice = this.innerText.toUpperCase();
	playRound();
	updateScore();
	updateSelectionVisualization(playerChoice, computerChoice);
}

function playRound() {
	computerChoice = getComputerChoice();

	//check result, update win counters, h2 win highlight
	switch (true) {
		case (playerChoice === computerChoice):
			ties += 1;
			let pTie = document.querySelector(".tie");
			pTie.classList.add('winner');
			break;
		case (playerChoice === 'ROCK' && computerChoice === 'PAPER'):
		case (playerChoice === 'PAPER' && computerChoice === 'SCISSORS'):
		case (playerChoice === 'SCISSORS' && computerChoice === 'ROCK'):
			computerWins += 1;
			let pComp = document.querySelector(".computer");
			pComp.classList.add('winner');
			if (computerScore >= 5) {
				alert('computer wins the match!');
			}
			break;
		case (playerChoice === 'ROCK' && computerChoice === 'SCISSORS'):
		case (playerChoice === 'PAPER' && computerChoice === 'ROCK'):
		case (playerChoice === 'SCISSORS' && computerChoice === 'PAPER'):
			playerWins += 1;
			let pPlayer = document.querySelector(".player");
			pPlayer.classList.add('winner');
			if (playerWins >= 5) {
				alert('player wins the match!');
			}
			break;
	}

}

function updateScore() {
	computerScore.innerText = computerWins;
	playerScore.innerText = playerWins;
	tieScore.innerText = ties;
}

function updateSelectionVisualization(pc, cc) {
	pSelection.innerText = "Player Choice: " + pc;
	cSelection.innerText = "Computer Choice: " + cc;
}

function removeTransition() {
	this.classList.remove("winner");
}

//create array of acceptable choices
const choiceArray = ['ROCK', 'PAPER', 'SCISSORS'];
//initialize global variables
let computerWins = 0;
let playerWins = 0;
let ties = 0;
let playerChoice = 0;
let computerChoice = 0;

// listen for player selection via buttons
const buttons = document.querySelectorAll('.buttons>button');

buttons.forEach((button) => { 
	button.addEventListener('click', assignPlayerChoice);

});

let computerScore = document.querySelector('.computer');
let playerScore = document.querySelector('.player');
let tieScore = document.querySelector('.tie');

const ps = document.querySelectorAll("p");
ps.forEach(p => p.addEventListener("transitionend", removeTransition));

const pSelection = document.querySelector('.playerSelection');
const cSelection = document.querySelector('.computerSelection');