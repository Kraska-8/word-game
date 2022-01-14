import React from 'react';

/**
 * Functional react component for 'Enter your word' button
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} - Rendered component (or wrapper element if display 'prop' is false )
 */
const EnterWordButton = (props) => {
  if (props.display) {
    return (
      <button
        data-test="component-enter-word-button"
        className="btn btn-primary spacer-bottom"
        onClick={props.buttonAction}
      >
        Enter your own secret word
      </button>
    );
  } else {
    return <div data-test="component-enter-word-button" />;
  }
};

export default EnterWordButton;
