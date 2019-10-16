import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

// Combine all reducers with function
// that takes in object with reducers
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers;