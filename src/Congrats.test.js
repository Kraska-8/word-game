import Congrats from './Congrats';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttribute } from '../test/testUtils';

// set up Enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} testValues - Context values specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => shallow(<Congrats {...props} />);

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders no-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttribute(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

