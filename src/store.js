/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { createStore, applyMiddleware } from 'redux'; // Import createStore and applyMiddleware
import thunk from 'redux-thunk'; // Import any middleware you want to use (e.g., redux-thunk)
import rootReducer from './reducers/gameReducer'; // Import your rootReducer

// Create a store with rootReducer and applyMiddleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
