import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../test/testUtils';

import Input from './Input';

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
  test('state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  })
});
