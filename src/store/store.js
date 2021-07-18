import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';
import state from './state';

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  state,
  applyMiddleware(...middlewares)
);

export default store;