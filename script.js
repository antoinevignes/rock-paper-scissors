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

console.log(getHumanChoice());
