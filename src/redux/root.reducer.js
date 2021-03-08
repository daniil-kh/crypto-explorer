import {combineReducers} from 'redux';

import coinReducer from './coins/coins.reducer';

const rootReducer = combineReducers({
  coins: coinReducer,
});

export default rootReducer;
