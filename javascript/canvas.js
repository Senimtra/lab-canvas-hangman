// #################################
// ## Iteration 2: Draw in Canvas ##
// #################################

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  // create the game board
  createBoard() {
    this.context.font = '36px Arial';
    this.context.clearRect(0, 0, 1000, 1000);
    this.context.beginPath();
    this.drawLines();
  }

  // draw the letter lines
  drawLines() {
    this.context.stroke();
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.strokeRect(250 + i * 50, 755, 35, 1);
    }
  }

  writeCorrectLetter() {
    let indexes = []
    // get the guessed letter's indexes in secretWord
    for (let i = 0; i < hangman.secretWord.length; i++) {
      if (hangman.secretWord[i] === hangman.guessedLetters[hangman.guessedLetters.length - 1]) {
        indexes.push(i);
      }
    }
    // print the guessed letter's occurances 
    indexes.forEach((letter) => this.context.fillText(hangman.secretWord[letter].toUpperCase(), (255 + (50 * letter)), 745));
    hangman.checkWinner();
  }

  // draw the wrong letters array
  writeWrongLetter() {
    // clear wrong letters
    this.context.clearRect(550, 214, 350, 40);
    this.context.fillText(hangman.letters.join(' ').toUpperCase(), 550, 250);
    if (hangman.errorsLeft >= 0) {
      // clear left tries output
      this.context.clearRect(550, 270, 180, 36);
      this.context.fillText(`Tries left: ${hangman.errorsLeft}`, 550, 300);
    }
    // check if the player lost
    hangman.checkGameOver();
  }

  // draw the hangman's lines
  drawHangman(errorsLeft) {
    let lineCount = 10 - errorsLeft;
    switch (lineCount) {
      case 1:
        this.context.strokeRect(80, 755, 130, 1);
        break;
      case 2:
        this.context.lineWidth = 2;
        this.context.moveTo(80, 755);
        this.context.lineTo(145, 720);
        this.context.stroke();
        break;
      case 3:
        this.context.lineTo(210, 755);
        this.context.stroke();
        break;
      case 4:
        this.context.moveTo(145, 720);
        this.context.lineTo(145, 150);
        this.context.stroke();
        break;
      case 5:
        this.context.lineTo(375, 150);
        this.context.stroke();
        break;
      case 6:
        this.context.lineTo(375, 200);
        this.context.stroke();
        break;
      case 7:
        this.context.moveTo(415, 240);
        this.context.arc(375, 240, 40, 0, Math.PI * 2);
        this.context.stroke();
        break;
      case 8:
        this.context.moveTo(375, 280);
        this.context.lineTo(375, 475);
        this.context.stroke();
        break;
      case 9:
        this.context.lineTo(320, 550);
        this.context.stroke();
        break;
      case 10:
        this.context.moveTo(375, 475);
        this.context.lineTo(430, 550);
        this.context.stroke();
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
