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

export const LoadNewCoinsPageStart = (order) => ({
  type: CoinsActionTypes.LOAD_NEW_COINS_PAGE_START,
  payload: order,
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

export const LoadAllAvailableCoinsStart = () => ({
  type: CoinsActionTypes.LOAD_ALL_AVAILABLE_COINS_START,
});

export const LoadAllAvailableCoinsSuccess = (coinsData) => ({
  type: CoinsActionTypes.LOAD_ALL_AVAILABLE_COINS_SUCCESS,
  payload: coinsData,
});

export const LoadAllAvailableCoinsFail = (error) => ({
  type: CoinsActionTypes.LOAD_ALL_AVAILABLE_COINS_FAIL,
  payload: error,
});

export const GetCoinExchangeRateStart = (id) => ({
  type: CoinsActionTypes.GET_COIN_EXCHANGE_RATE_START,
  payload: id,
});

export const GetCoinExchangeRateSuccess = (exchangeRate) => ({
  type: CoinsActionTypes.GET_COIN_EXCHANGE_RATE_SUCCESS,
  payload: exchangeRate,
});

export const GetCoinExchangeRateFail = (error) => ({
  type: CoinsActionTypes.GET_COIN_EXCHANGE_RATE_FAIL,
  payload: error,
});
