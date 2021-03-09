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

export const selectedCoinSelector = createSelector(
  coinsSliceSelector,
  (coins) => coins.selectedCoin,
);

export const coinDataSelector = (id) =>
  createSelector(
    coinsSelector,
    (allCoinsPerPage) => allCoinsPerPage.filter((coin) => coin.id === id),
  );
