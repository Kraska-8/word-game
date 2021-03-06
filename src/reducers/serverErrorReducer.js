import { actionTypes } from '../actions';

/**
 * @function serverErrorReducer
 * @param {boolean} state - State before reducer
 * @param {Object} action - Action sent to reducer
 * @returns {boolean} - New state (depending on action type)
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.SERVER_ERROR:
      return true;
    default:
      return state;
  }
};
