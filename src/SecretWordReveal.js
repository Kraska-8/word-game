import React from 'react';

/**
 * Functional react component for 'you gave up' message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `display` prop is false).
 */
const SecretWordReveal = ({ display, secretWord }) => {
  if (display) {
    return (
      <div
        data-test="component-secret-word-reveal"
        className="alert alert-danger"
      >
        <span data-test="reveal-message">
          The secret word was "{secretWord}"<br />
          Better luck next time!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-secret-word-reveal" />;
  }
};

export default SecretWordReveal;
