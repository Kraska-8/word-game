import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../test/testUtils';

import GuessedWords from './GuessedWords';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {array} guessedWords - guessedWords value specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<GuessedWords {...props} />)
};

describe('if there are no words guessed', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = setup({ guessedWords: [] });
  })

  test('renders without errors', () => {
    const component = findByTestAttribute(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttribute(wrapper, 'guess-instructions');

    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {

});
