import React, { useState } from 'react';

/**
 * Functional react component for entering word form
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} - Rendered component
 */
export const EnterWordForm = ({ formAction }) => {
  const [secretWord, setSecretWord] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    if (secretWord.length > 0) {
      formAction(secretWord);
    }
  };

  return (
    <div data-test="component-enter-word-form">
      <p data-test="enter-word-instructions">
        Enter a secret word for someone else to guess!
      </p>
      <form className="form-inline">
        <input
          data-test="enter-word-input"
          className="mb-2 mx-sm-3"
          type="text"
          value={secretWord}
          onChange={(e) => setSecretWord(e.target.value)}
          placeholder="enter secret word"
        />
        <button
          data-test="submit-button"
          onClick={submitForm}
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterWordForm;
