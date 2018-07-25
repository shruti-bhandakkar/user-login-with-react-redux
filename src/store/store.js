import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  authentication
});
export const store=createStore(rootReducer);
