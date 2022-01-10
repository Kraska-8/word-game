import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
}

export const getSecretWord = () => {
  return axios.get('http://localhost:3000')
    .then(response => response.data)
};
