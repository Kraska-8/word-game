import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import EnterWordButton from './EnterWordButton';

const defaultProps = { display: true };

/**
 * Factory function to create a ShallowWrapper for the EnterWordButton component
 * @function setup
 * @param {Object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordButton { ...setupProps } />)
}

describe('render', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-enter-word-button');

    expect(component.length).toBe(1);
  });

  test('renders no text when `display` prop is false', () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttr(wrapper, 'component-enter-word-button');

    expect(component.text()).toBe('');
  });

  test('renders non-empty text when `display` prop is true', () => {
    const wrapper = setup({ display: true, buttonAction: () => {} });
    const component = findByTestAttr(wrapper, 'component-enter-word-button');

    expect(component.text().length).not.toBe(0);
  });
});

test('calls `buttonAction` prop upon button click', () => {
  const buttonActionMock = jest.fn();
  const wrapper = setup({ display: true, buttonAction: buttonActionMock });
  const resetButton = findByTestAttr(wrapper, 'component-enter-word-button');

  resetButton.simulate('click');

  expect(buttonActionMock.mock.calls.length).toBe(1);
});
