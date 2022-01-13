import React from 'react';

/**
 * Functional react component for count of total guesses.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const TotalGuesses = (props) => {
  return (
    <h4 data-test="component-total-guesses">
      Total Guesses: {props.guessCount}
    </h4>
  );
};

export default TotalGuesses;
