'use strict';

// Lets try this on my own before watching the video.

// Break into sub problems

// 1: Select all of the DOM elements we'll need
// 2: Build a function to generate a random number between 1-20.
// 3: Build a function to run the game and run it as soon as the page loads.

// The game function:
// Reset the running score to be 20, update the score value on the page, change the body background colour to #222, change the message to "Start guesssing...", clear the input, change the number in the box to be "?".
// Generate a random number to be the answer.

// When the player presses check button:

// Change number to be the guess.
// Compare value in guess to the random number.
// If guess == answer, change message to '🎉 Correct number!', if High Score < Score then change Score to High Score, change body background to green.
// If guess != answer, decrease score by 1 and change number to guess. Then:
// If guess < answer, change message to '📉 Too low!'
// If guess > answer, change message to '📈 Too high!'

// 4: Add an event listener to the again button to rerun game function.

const restartGame = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const check = document.querySelector('.check');
let valueToCheck;
let runningScore;
let answer;

game();

function game() {
  resetDefault();

  check.addEventListener('click', checkAnswer);
}

restartGame.addEventListener('click', resetDefault);

function calculateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetDefault() {
  answer = calculateRandomNumber(1, 20);
  check.disabled = false;
  guess.value = null;
  runningScore = 20;
  score.textContent = runningScore;
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
}

function checkAnswer() {
  valueToCheck = guess.valueAsNumber;

  // Ensure valid input
  if (!valueToCheck || (valueToCheck < 1 && valueToCheck > 20)) {
    message.textContent =
      'Oops! You need to give a number between 1 and 20. Please try again!';

    guess.style.borderColor = 'red';
  } else {
    guess.style.borderColor = 'white';

    number.textContent = valueToCheck;

    if (valueToCheck === answer) {
      score.textContent = runningScore;
      message.textContent = '🎉 Correct number!';
      document.body.style.backgroundColor = 'green';

      if (runningScore > highscore.textContent) {
        highscore.textContent = runningScore;
      }
    } else {
      runningScore--;
      score.textContent = runningScore;

      if (runningScore <= 0) {
        message.textContent = '❌ Game over!';
        check.disabled = true;
      } else if (valueToCheck > answer) {
        message.textContent = '📈 Too high!';
      } else {
        message.textContent = '📉 Too low!';
      }
    }
  }
}
