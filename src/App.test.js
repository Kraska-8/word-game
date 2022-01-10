import { mount } from 'enzyme';
import { findByTestAttribute, storeFactory } from '../test/testUtils';
import App from './App';
import { Provider } from 'react-redux';

jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';
/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const store = storeFactory();
  return mount(<Provider store={store}><App /></Provider>);
};

test('Irenders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, 'component-app');

  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test('get secret word on app mount', () => {
    const wrapper = setup();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
