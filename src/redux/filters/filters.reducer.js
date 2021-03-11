import FiltersActionTypes from './filters.types';

const initialState = {
  filter: {},
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FiltersActionTypes.SET_FILTERS:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
