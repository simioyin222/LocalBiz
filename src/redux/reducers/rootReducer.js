import { combineReducers } from 'redux';
import coffeeReducer from './coffeeReducer';

const rootReducer = combineReducers({
  coffee: coffeeReducer
});

export default rootReducer;