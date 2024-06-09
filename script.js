let humanScore = 0;
let computerScore = 0;

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

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  results.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  results.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
});
scissorButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  results.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;
});

const results = document.createElement("div");
results.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}`;

container.appendChild(results);

const resultText = document.createElement("p");
container.appendChild(resultText);
