import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { guessWord, giveUp } from './actions';

/**
 * Functional react component for user input form
 * @function
 * @param {string} secretWord - secret word
 * @returns {JSX.Element} - Rendered component
 */
const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const gaveUp = useSelector((state) => state.gaveUp);

  if (success || gaveUp) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(guessWord(currentGuess));
            setCurrentGuess('');
          }}
          className="btn btn-primary mb-2 mx-3"
        >
          Submit
        </button>
        <button
          data-test="give-up-button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(giveUp());
          }}
          className="btn btn-danger mb-2"
        >
          Give up
        </button>
      </form>
    </div>
  );
}

export default Input;
