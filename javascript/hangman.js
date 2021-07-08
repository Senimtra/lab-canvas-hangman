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
    let letterCount = 0;
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.includes(this.secretWord[i])) {
        letterCount++;
      }
    }
    return letterCount === this.secretWord.length;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', () => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // check if input is a letter
  if (hangman.checkIfLetter(event.keyCode)) {
    // check if letter was pressed before
    if (!hangman.letters.includes(event.key) && !hangman.guessedLetters.includes(event.key) && (hangman.errorsLeft > 0)) {
      // check if letter is part of the secret word
      if (hangman.secretWord.includes(event.key)) {
        // add letter to guessedLetters + draw to canvas
        hangman.addCorrectLetter(event.key);
        hangmanCanvas.writeCorrectLetter();
      } else {
        // add letter to letters + draw to canvas
        hangman.addWrongLetter(event.key);
        hangmanCanvas.writeWrongLetter();
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
    }
  }
});
