import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttribute, storeFactory } from '../test/testUtils';
import { Provider } from 'react-redux';

import Input from './Input';

const mockSetCurrentGuess = jest.fn();

/**
 * Setup function for input component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}, secretWord='party') => {
  const store = storeFactory(initialState);
  return mount(<Provider store={store}><Input secretWord={secretWord} /></Provider>);
}

describe('render', () => {
  describe('success is false', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    })
    test('Input renders without error', () => {
      const inputComponent = findByTestAttribute(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });
    test('input box displays', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });
    test('submit button displays', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
  describe('success is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    })
    test('Input renders without error', () => {
      const inputComponent = findByTestAttribute(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });
    test('input box does not display', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });
    test('submit button does not display', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = () => ['', mockSetCurrentGuess];
    wrapper = setup({ success: false });
  });
  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttribute(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };

    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  test('field is cleared upon submit button click', () => {
    const inputBox = findByTestAttribute(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };

    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
})
