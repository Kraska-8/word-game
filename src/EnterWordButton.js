import React from 'react';

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
