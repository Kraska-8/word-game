import { actionTypes } from '../actions';

/**
 * @function userEnterReducer
 * @param {string|null} state - State before reducer
 * @param {Object} action - Action sent to reducer
 * @returns {string|null} - New state (depending on action type)
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.USER_ENTERING:
      return 'inProgress';
    case actionTypes.USER_ENTERED:
      return 'done';
    case actionTypes.RESET_GAME:
      return null;
    default:
      return state;
  }
};
