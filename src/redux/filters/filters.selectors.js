import {createSelector} from 'reselect';

export const filterSliceSelector = (state) => state.filters;

export const filtersSelector = createSelector(
  filterSliceSelector,
  (filters) => filters.filter,
);
