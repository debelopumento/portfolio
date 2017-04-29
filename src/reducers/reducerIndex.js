import { combineReducers } from 'redux';

let standinReducer;

const allReducers = combineReducers({
    standin: standinReducer,
});

export default allReducers;
