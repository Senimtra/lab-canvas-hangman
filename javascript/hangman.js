// #################################
// ## Iteration 1: The game logic ##
// #################################

class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  // return a random word from the words array
  pickWord() {
    return String(this.words[Math.floor(Math.random() * this.words.length)]);
  }

  // check if the pressed key is a letter
  checkIfLetter(keyCode) {
    return ((keyCode > 64) && (keyCode < 91));
  }

  // check if the letter has already been pressed
  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  // add the correct letter to guessedLetters
  addCorrectLetter(letter) {
    return this.guessedLetters += letter;
  }

  // decrement tries + push letter into tried letters array
  addWrongLetter(letter) {
    if (!this.letters.includes(letter)) { this.letters.push(letter) };
    return this.errorsLeft--;
  }

  // check if there are still tries left
  checkGameOver() {
    return !this.errorsLeft > 0;
  }

  // check if the user won
  checkWinner() {
    return (this.guessedLetters.length === this.secretWord.length);
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
