import FiltersActionTypes from './filters.types';

export const setFilters = (filters) => ({
  type: FiltersActionTypes.SET_FILTERS,
  payload: filters,
});
