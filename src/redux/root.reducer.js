import {combineReducers} from 'redux';

import coinReducer from './coins/coins.reducer';
import filtersReducer from './filters/filters.reducer';

const rootReducer = combineReducers({
  coins: coinReducer,
  filters: filtersReducer,
});

export default rootReducer;
