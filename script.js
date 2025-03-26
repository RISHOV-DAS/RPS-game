let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

updateScore();

function playGame(playerMove) {
  const computerMove = PickComputerMove();
  let result = "";

  if (playerMove === "Scissor") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissor") {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissor") {
      result = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissor") {
      result = "You Win";
    }
  }
  if (result === "You Win") {
    score.Wins += 1;
  } else if (result === "You Lose") {
    score.Losses += 1;
  } else if (result === "Tie") {
    score.Ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You picked <img src="image/${playerMove}-emoji.png" class="icon" > <==> Computer picked <img src="image/${computerMove}-emoji.png" class="icon" >`;

  document.querySelector(".js-result").innerHTML = result;

  console.log(
    `You picked ${playerMove}.Computer picked ${computerMove}. ${result}
Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`
  );
}

function PickComputerMove() {
  let computerMove = "";
  const random = Math.random();

  if (random >= 0 && random < 1 / 3) {
    computerMove = "Rock";
  } else if (random >= 1 / 3 && random < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissor";
  }

  return computerMove;
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
}
