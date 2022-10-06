'use strict';

/* 

The game: The first player rolls a dice continuously. If they roll between 2-6, the roll is added to their current total. However, if they roll a 1, then they pass over to the other player.

At any time whilst it is their turn, the player may hold their current total and add it to their current total.

If either player reaches 100, they have won the game.

 */

/* 1. Define variables for:
	- Roll dice button.
	- Hold button.
	- New game button.
	- The dice image.
	- Each players name DOM element.
	- Each players DOM element.
	- Each players total score DOM element.
	- Each players current score DOM element.
	- A running score.
	- Each players total score.
	- The current dice value.
	- Who the current player is.
	- Who the most recent winner was.
*/

const rollDiceButtonEl = document.querySelector('.btn--roll');
const holdButtonEl = document.querySelector('.btn--hold');
const newGameButtonEl = document.querySelector('.btn--new');
const diceImageEl = document.querySelector('.dice');
const playerNamesEl = document.querySelectorAll('.name');
const playerSectionsEl = document.querySelectorAll('.player');
const playerTotalScoresEl = document.querySelectorAll('.score');
const playerCurrentScoresEl = document.querySelectorAll('.current-score');
let runningScore = 0;
let totalScores = [0, 0];
let currentPlayer;
let diceValue;

// 2. Build a function to generate a random number between 1 and 6 inclusive to be called in the game function.

function calculateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 3. Build a function to reset the game to be called when the game begins.
	- Remove winner class from both players.
	- Set both players total score to 0 and update the score DOM elements.
	- Set both players current score to 0 and update the score DOM elements.
	- Set current player to player 1 and add active class to player 1.
	- Hide the dice image.
	- Reactivate the Roll Dice button. 
*/

function resetGame() {
  runningScore = 0;

  for (let i = 0; i < 2; i++) {
    playerSectionsEl[i].classList.remove('player--winner');
    totalScores[i] = 0;
    playerTotalScoresEl[i].textContent = 0;
    playerCurrentScoresEl[i].textContent = 0;
  }

  diceImageEl.classList.add('hidden');
  currentPlayer = 0;
  playerSectionsEl[currentPlayer].classList.add('player--active');
  playerSectionsEl[1].classList.remove('player--active');
  rollDiceButtonEl.disabled = false;
  holdButtonEl.disabled = false;
}

/* 4. Build a function to start the game (to be called immediately when the page loads, and then be tied to an eventlistener on the new game button).
	- call reset game function.
	- add event listener to roll dice button.
		- call generate random number generator with arguments of 1 and 6 and set the dice number variable to this number.
		- set the dice image to the correct image.
		- number between 2 and 6? Add to current score.
		- number = 1? Set current score to 0 and update DOM. Change player.
	- add event listener to hold button.
		- Add score of current player to their total score and update DOM.
		- Score >= 100? Update classLists for current player section and name. Disable roll dice and hold button.
		- Switch player.
 */

playGame();

function playGame() {
  resetGame();
  diceImageEl.classList.remove('hidden');

  rollDiceButtonEl.addEventListener('click', rollDice);
}

function addDice(diceResult) {
  runningScore += diceResult;
  playerCurrentScoresEl[currentPlayer].textContent = runningScore;
}

holdButtonEl.addEventListener('click', holdScore);

function changePlayer() {
  playerCurrentScoresEl[currentPlayer].textContent = 0;
  playerSectionsEl[currentPlayer].classList.remove('player--active');

  currentPlayer = Number(!currentPlayer);

  playerSectionsEl[currentPlayer].classList.add('player--active');
  runningScore = 0;
}

function holdScore() {
  totalScores[currentPlayer] += runningScore;
  playerTotalScoresEl[currentPlayer].textContent = totalScores[currentPlayer];

  if (totalScores[currentPlayer] >= 100) {
    playerSectionsEl[currentPlayer].classList.add('player--winner');
    rollDiceButtonEl.disabled = true;
    holdButtonEl.disabled = true;
  }

  changePlayer();
}

function rollDice() {
  diceValue = calculateRandomNumber(1, 6);
  diceImageEl.src = `dice-${diceValue}.png`;

  diceValue > 1 ? addDice(diceValue) : changePlayer();
}

/* 5. Add event listener to New Game button to start again! */

newGameButtonEl.addEventListener('click', playGame);
