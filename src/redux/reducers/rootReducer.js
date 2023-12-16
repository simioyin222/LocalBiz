import { combineReducers } from 'redux';
import coffeeReducer from './coffeeReducer';

const rootReducer = combineReducers({
  coffee: coffeeReducer
  // Add more reducers here as your app grows
});

export default rootReducer;