import React from 'react';

/**
 * Functional react component for reset button
 * @function
 * @param {Object} props - React props
 * @returns {JSX.Element} - Rendered component
 */
const NewWordButton = (props) => {
  if (props.display) {
    return (
      <button
        data-test="component-new-word-button"
        className="btn btn-primary spacer-bottom"
        onClick={props.resetAction}
      >
        New word
      </button>
    );
  } else {
    return (
      <div data-test="component-new-word-button" />
    );
  }
};

export default NewWordButton;
