let humanScore = 0;
let computerScore = 0;

//Functions//

const getComputerChoice = () => {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    resultText.textContent = `It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText.textContent = `You won the round!`;
  } else {
    computerScore++;
    resultText.textContent = `You lost the round!`;
  }
};

const playGame = () => {
  if (humanScore === 5) {
    hasWon.textContent = "You won the game!";
    rockButton.disabled = "disabled";
    paperButton.disabled = "disabled";
    scissorButton.disabled = "disabled";
    const reset = document.createElement("button");
    reset.textContent = "Reset Game";
    container.appendChild(reset);
  } else if (computerScore === 5) {
    hasWon.textContent = "The computer won the game...";
    rockButton.disabled = "disabled";
    paperButton.disabled = "disabled";
    scissorButton.disabled = "disabled";
    const reset = document.createElement("button");
    reset.textContent = "Reset Game";
    container.appendChild(reset);
  }
};

//DOM manipulation//

const container = document.querySelector("#container");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorButton.textContent = "Scissors";

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorButton);

const score = document.createElement("div");
score.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
container.appendChild(score);

const resultText = document.createElement("p");
container.appendChild(resultText);

const hasWon = document.createElement("h1");
container.appendChild(hasWon);

//Event listeners//

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  score.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
  playGame();
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  score.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
  playGame();
});
scissorButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  score.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
  playGame();
});
