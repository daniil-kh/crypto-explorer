import {createSelector} from 'reselect';

export const coinsSliceSelector = (state) => state.coins;

export const pageSelector = createSelector(
  coinsSliceSelector,
  (coins) => coins.page,
);

export const coinsSelector = createSelector(
  coinsSliceSelector,
  (coins) => coins.allCoinsPerPage,
);

export const isLoadingSelector = createSelector(
  coinsSliceSelector,
  (coins) => coins.loading,
);
