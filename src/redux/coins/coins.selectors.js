import {createSelector} from 'reselect';

import {filtersSelector} from '../filters/filters.selectors';
import {sortByFilter} from '../filters/filter.utils';

export const coinsSliceSelector = (state) => state.coins;

export const pageSelector = createSelector(
  coinsSliceSelector,
  (coins) => coins.page,
);

export const coinsSelector = createSelector(
  [coinsSliceSelector, filtersSelector],
  (coins, filter) => sortByFilter(coins.allCoinsPerPage, filter),
);

export const isLoadingSelector = createSelector(
  coinsSliceSelector,
  (coins) => coins.loading,
);

export const selectedCoinSelector = createSelector(
  coinsSliceSelector,
  (coins) => coins.selectedCoin,
);

export const coinDataSelector = (id) =>
  createSelector(coinsSelector, (allCoinsPerPage) =>
    allCoinsPerPage.filter((coin) => coin.id === id),
  );
