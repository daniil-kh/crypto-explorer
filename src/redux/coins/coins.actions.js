import CoinsActionTypes from './coins.types';

export const LoadCoinsStart = () => ({
  type: CoinsActionTypes.LOAD_COINS_START,
});

export const LoadCoinsSuccess = (coinsData) => ({
  type: CoinsActionTypes.LOAD_COINS_SUCCESS,
  payload: coinsData,
});

export const LoadCoinsFail = (error) => ({
  type: CoinsActionTypes.LOAD_COINS_FAIL,
  payload: error,
});

export const LoadNewCoinsPageStart = () => ({
  type: CoinsActionTypes.LOAD_NEW_COINS_PAGE_START,
});

export const LoadNewCoinsPagesSuccess = (coinsData) => ({
  type: CoinsActionTypes.LOAD_NEW_COINS_PAGE_SUCCESS,
  payload: coinsData,
});

export const LoadNewCoinsPagesFail = (error) => ({
  type: CoinsActionTypes.LOAD_NEW_COINS_PAGE_FAIL,
  payload: error,
});

export const LoadCoinDetailStart = (id) => ({
  type: CoinsActionTypes.LOAD_COIN_DETAIL_START,
  payload: id,
});

export const LoadCoinDetailSuccess = (coinData) => ({
  type: CoinsActionTypes.LOAD_COIN_DETAIL_SUCCESS,
  payload: coinData,
});

export const LoadCoinDetailFail = (error) => ({
  type: CoinsActionTypes.LOAD_COIN_DETAIL_FAIL,
  payload: error,
});
