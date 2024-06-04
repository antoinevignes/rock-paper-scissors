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

const getHumanChoice = () => {
  prompt("Rock, Paper, or Scissors?");
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice.toLowerCase() === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You won the round!");
  } else {
    computerScore++;
    console.log("You lose the round!");
  }
};

console.log(playRound("scissors", "paper"));
