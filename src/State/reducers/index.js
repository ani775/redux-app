import { combineReducers } from 'redux'; // Correct import statement
import amountReducer from './amountReducer';

// Combine all reducers into a single root reducer
const reducers = combineReducers({
    amount: amountReducer
});

export default reducers;
