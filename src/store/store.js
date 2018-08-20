import {createStore, combineReducers} from 'redux';
import {authentication} from '../reducer/reducer.js'

const rootReducer = combineReducers({
  authentication
});
export const store=createStore(
    rootReducer
);
