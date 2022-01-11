import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {guessWord} from './actions';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const success = useSelector(state => state.success);
  const dispatch = useDispatch();

  if (success) {
    return <div data-test="component-input" />
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
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(guessWord(currentGuess));
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
};

export default Input;
