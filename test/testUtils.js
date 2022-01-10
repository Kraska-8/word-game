import { createStore } from 'redux';
import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => createStore(rootReducer, initialState);


/**
 * Return node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 */
export const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);
