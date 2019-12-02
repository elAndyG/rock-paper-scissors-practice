function main() {
  let userScore = 0;
  let computerScore = 0;
  const userScore_span = document.getElementById('user-score');
  const computerScore_span = document.getElementById('computer-score');
  const scoreBoard_div = document.querySelector('.score-board');
  const result_p = document.querySelector('.result > p');
  const rock_div = document.getElementById('r');
  const paper_div = document.getElementById('p');
  const scissors_div = document.getElementById('s');

  function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    // randomize is 0, 1 or 2.
    const randomize = Math.floor(Math.random() * choices.length);
    return choices[randomize];
  }

  function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
  }

  function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const user = ' 😎'.fontsize(3).sup();
    const computer = ' 🤖'.fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${user} beats ${convertToWord(
      computerChoice
    )}${computer}. You win! 🥳`;
  }

  function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const user = ' 😎'.fontsize(3).sup();
    const computer = ' 🤖'.fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(computerChoice)}${computer} beats ${convertToWord(
      userChoice
    )}${user}. You lose! 💩`;
  }

  function draw(userChoice, computerChoice) {
    const user = ' 😎'.fontsize(3).sup();
    const computer = ' 🤖'.fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${user} matched ${convertToWord(
      computerChoice
    )}${computer}. It's a draw! `;
  }

  function game(userChoice) {
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        win(userChoice, computerChoice);
        break;
      case 'rr':
      case 'pp':
      case 'ss':
        draw();
        break;
      case 'sr':
      case 'rp':
      case 'ps':
        lose(userChoice, computerChoice);
        break;
    }
  }

  rock_div.addEventListener('click', function() {
    game('r');
  });

  paper_div.addEventListener('click', function() {
    game('p');
  });

  scissors_div.addEventListener('click', function() {
    game('s');
  });
}

main();
