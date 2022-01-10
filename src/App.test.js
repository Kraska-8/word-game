import { shallow } from 'enzyme';
import { findByTestAttribute} from '../test/testUtils';
import App from './App';

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test('Irenders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, 'component-app');

  expect(appComponent).toHaveLength(1);
});

