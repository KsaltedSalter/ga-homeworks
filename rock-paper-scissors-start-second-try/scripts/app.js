// * Remember to run "go live" below to see your changes on save.

// * write all your code INSIDE the function below
function init() {
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const playerChoiceDisplay = document.getElementById("player-choice");
  const resultDisplay = document.getElementById("result");
  const possibleChoices = document.querySelectorAll(".choices");
  const resetBtn = document.getElementById("reset");

  let playerChoice;
  let computerChoice;
  let result;

  possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (event) => {
      playerChoice = event.target.id;
      playerChoiceDisplay.innerHTML = playerChoice;
      generateComputerChoice();
      getResult();
    })
  );

  function resetGame() {
    computerChoice = "";
    computerChoiceDisplay.innerHTML = computerChoice;
    playerChoice = "";
    playerChoiceDisplay.innerHTML = playerChoice;
    resultDisplay.innerHTML = "";
  }

  resetBtn.addEventListener("click", resetGame);

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) {
      computerChoice = "rock";
    }
    if (randomNumber === 1) {
      computerChoice = "paper";
    }
    if (randomNumber === 2) {
      computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
  }

  function getResult() {
    if (computerChoice === playerChoice) {
      result = "no one. it's a draw!";
    }
    if (computerChoice === "rock" && playerChoice === "paper") {
      result = "you win!";
    }
    if (computerChoice === "rock" && playerChoice === "scissors") {
      result = "computer wins!";
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
      result = "computer wins!";
    }
    if (computerChoice === "paper" && playerChoice === "scissors") {
      result = "you win!";
    }
    if (computerChoice === "scissors" && playerChoice === "rock") {
      result = "you win!";
    }
    if (computerChoice === "scissors" && playerChoice === "paper") {
      result = "computer wins!";
    }
    resultDisplay.innerHTML = result;
  }
}

// ! do not touch below here
window.addEventListener("DOMContentLoaded", init);
