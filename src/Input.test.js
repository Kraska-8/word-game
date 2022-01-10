import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../test/testUtils';

import Input from './Input';

const mockSetCurrentGuess = jest.fn();

/**
 * Setup function for input component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />)
};

test('Input renders without errors', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttribute(wrapper, 'component-input');

  expect(inputComponent.length).toBe(1);
});

describe('state controlled input field', () => {
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = () => ["", mockSetCurrentGuess];
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttribute(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttribute(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
