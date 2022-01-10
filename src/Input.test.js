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
const setup = (success=false, secretWord='patry') => {
  return shallow(<Input success={success} secretWord={secretWord} />)
};

describe('render', () => {
  describe('success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(true);
    });

    test('Input renders without errors', () => {
      const wrapper = setup();
      const inputComponent = findByTestAttribute(wrapper, 'component-input');

      expect(inputComponent.length).toBe(1);
    });

    test('input box does not show', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });

    test('submit button does not show', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(false);
    });

    test('Input renders without errors', () => {
      const wrapper = setup();
      const inputComponent = findByTestAttribute(wrapper, 'component-input');

      expect(inputComponent.length).toBe(1);
    });

    test('input box showsa', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });

    test('submit button does shows', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
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
