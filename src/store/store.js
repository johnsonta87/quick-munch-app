import { createStore, combineReducers } from 'redux';
import { userReducer as user } from './reducers/user';

const reducers = combineReducers({
  user,
});

export const store = createStore(reducers);
