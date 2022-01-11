import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';
import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => createStore(rootReducer, initialState, applyMiddleware(...middlewares));

/**
 * Return node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 */
export const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);
