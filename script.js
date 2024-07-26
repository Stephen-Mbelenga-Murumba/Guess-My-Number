'use strict';
// Game logic- random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('No Number!');
    //When guess is equal to number
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#166534';
    document.querySelector('.number').style.width = '30rem';
    // Update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#65a30d';
  document.querySelector('.number').style.width = '15rem';
});
