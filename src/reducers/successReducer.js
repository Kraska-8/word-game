import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {boolean} state - previous state
 * @param {Object} action - action to be reduced
 * @returns {boolean} - new success state
 */
export default (state = false, action) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
};
