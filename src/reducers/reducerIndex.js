import { combineReducers } from 'redux';

const activitiesReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOAD_ACTIVITIES': {
            return action.payload;
        }
        default:
            return state;
    }
};

const allReducers = combineReducers({
    activities: activitiesReducer,
});

export default allReducers;
