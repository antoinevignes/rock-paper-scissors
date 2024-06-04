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
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice.toLowerCase() === computerChoice) {
    alert(
      `It's a tie! Your score: ${humanScore}. Computer score: ${computerScore}`
    );
  } else if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
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

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    alert("You win the game!");
  } else if (humanScore === computerScore) {
    alert("It's a tie!");
  } else {
    alert("You lost the game!");
  }
};

playGame();
