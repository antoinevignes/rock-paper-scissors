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
    alert(
      `It's a tie! Your score: ${humanScore}. Computer score: ${computerScore}`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    alert(
      `You won the round! Your score: ${humanScore}. Computer score: ${computerScore}`
    );
  } else {
    computerScore++;
    alert(
      `You lose the round! Your score: ${humanScore}. Computer score: ${computerScore}`
    );
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
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
