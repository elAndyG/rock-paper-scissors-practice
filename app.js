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

  function visuallyNotifyChoice(userChoice, colorClass) {
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add(colorClass);
    setTimeout(() => userChoice_div.classList.remove(colorClass), 1000);
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

    visuallyNotifyChoice(userChoice, 'green-glow');
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

    visuallyNotifyChoice(userChoice, 'red-glow');
  }

  function draw(userChoice, computerChoice) {
    const user = ' 😎'.fontsize(3).sup();
    const computer = ' 🤖'.fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${user} matched ${convertToWord(
      computerChoice
    )}${computer}. It's a draw! `;

    visuallyNotifyChoice(userChoice, 'gray-glow');
  }

  function game(userChoice) {
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
        draw(userChoice, computerChoice);
        break;
      case 'sr':
      case 'rp':
      case 'ps':
        lose(userChoice, computerChoice);
        break;
    }
  }

  rock_div.addEventListener('click', () => game('r'));

  paper_div.addEventListener('click', () => game('p'));

  scissors_div.addEventListener('click', () => game('s'));
}

main();
