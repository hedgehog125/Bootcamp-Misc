let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
	return Math.floor(Math.random() * 10);
}
function compareGuesses(humanGuess, computerGuess, answer) {
	const humanDistance = Math.abs(humanGuess - answer);
	const computerDistance = Math.abs(computerGuess - answer);

	if (humanDistance <= computerDistance) return true;
	return false;
}
function updateScore(winner) {
	if (winner === "human") humanScore++;
	else if (winner === "computer") computerScore++;
}
function advanceRound() {
	currentRoundNumber++;
}
