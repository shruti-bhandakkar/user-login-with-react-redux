import {createStore, combineReducers} from 'redux';
import {authentication} from '../reducer/reducer.js'

const rootReducer = combineReducers({
  authentication
});
export const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
