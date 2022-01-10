/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split('');
  const guessedLetters = new Set(guessedWord);

  return secretLetters.filter(letter => guessedLetters.has(letter)).length;
};
