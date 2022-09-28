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

  answer = calculateRandomNumber(1, 20);

  check.addEventListener('click', checkAnswer);
}

restartGame.addEventListener('click', game);

function calculateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetDefault() {
  guess.value = null;
  runningScore = 20;
  score.innerText = runningScore;
  document.body.style.backgroundColor = '#222';
  message.innerText = 'Start guessing...';
  number.innerText = '?';
}

function checkAnswer() {
  {
    valueToCheck = guess.valueAsNumber;

    if (valueToCheck >= 1 && valueToCheck <= 20) {
      guess.style.borderColor = 'white';

      number.innerText = valueToCheck;

      if (valueToCheck === answer) {
        score.innerText = runningScore;
        message.innerText = '🎉 Correct number!';
        document.body.style.backgroundColor = 'green';

        if (runningScore > highscore.innerText) {
          highscore.innerText = runningScore;
        }
      } else {
        runningScore--;
        score.innerText = runningScore;

        if (valueToCheck > answer) {
          message.innerText = '📈 Too high!';
        } else {
          message.innerText = '📉 Too low!';
        }
      }
    } else {
      message.innerText =
        'Oops! You need to give a number between 1 and 20. Please try again!';

      guess.style.borderColor = 'red';
    }
  }
}
