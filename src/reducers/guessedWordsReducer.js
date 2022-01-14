import { actionTypes } from '../actions';

/**
 * @function guessedWordsReducer
 * @param {Array} state - Array of guessed words
 * @param {Object} action - action to be reduced
 * @returns {Array} - new guessedWords state
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    case actionTypes.RESET_GAME:
      return [];
    default:
      return state;
  }
};
