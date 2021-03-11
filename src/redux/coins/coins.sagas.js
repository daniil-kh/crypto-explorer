import {put, call, select, takeLatest, all} from 'redux-saga/effects';
import axios from 'axios';

import CoinsActionTypes from './coins.types';
import {
  LoadCoinsSuccess,
  LoadCoinsFail,
  LoadNewCoinsPagesSuccess,
  LoadNewCoinsPagesFail,
  LoadCoinDetailSuccess,
  LoadCoinDetailFail,
  LoadAllAvailableCoinsFail,
  GetCoinExchangeRateFail,
  GetCoinExchangeRateSuccess,
  LoadAllAvailableCoinsSuccess,
} from './coins.actions';

import {pageSelector} from './coins.selectors';

import {
  marketCoinsUrl,
  coinDetailUrl,
  allAvailableCoinsUrl,
  exchangeRateUrl,
} from '../../constants/api';

export function* loadCoinsOnCurrentPage() {
  try {
    const currentPage = yield select(pageSelector);
    const response = yield axios.get(marketCoinsUrl, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_decs',
        per_page: '100',
        page: currentPage,
        sparkline: 'true',
        price_change_percentage: '1h',
      },
    });
    yield put(LoadCoinsSuccess(response.data ? response.data : []));
  } catch (error) {
    yield put(LoadCoinsFail(error));
  }
}

export function* onLoadCoinsOnCurrentPageStart() {
  yield takeLatest(CoinsActionTypes.LOAD_COINS_START, loadCoinsOnCurrentPage);
}

export function* loadNewCoinsPage({payload}) {
  try {
    const prevPage = yield select(pageSelector);
    const currentPage = prevPage + (payload === 'next' ? 1 : -1);
    if (currentPage > 0) {
      const response = yield axios.get(marketCoinsUrl, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_decs',
          per_page: '100',
          page: currentPage,
          sparkline: 'true',
          price_change_percentage: '1h',
        },
      });
      if (response.data?.length <= 0) {
        yield put(
          LoadNewCoinsPagesSuccess({page: prevPage, coinsData: response.data}),
        );
      } else {
        yield put(
          LoadNewCoinsPagesSuccess({
            page: currentPage,
            coinsData: response.data,
          }),
        );
      }
    } else {
      yield put(LoadNewCoinsPagesSuccess({page: prevPage, coinsData: []}));
    }
  } catch (error) {
    yield put(LoadNewCoinsPagesFail(error));
  }
}

export function* onLoadNewCoinsPageStart() {
  yield takeLatest(
    CoinsActionTypes.LOAD_NEW_COINS_PAGE_START,
    loadNewCoinsPage,
  );
}

export function* LoadCoinsDetails({payload}) {
  try {
    const response = yield axios.get(coinDetailUrl(payload), {
      params: {
        localization: 'false',
        tickers: 'true',
        market_data: 'true',
        community_data: 'false',
        developer_data: 'false',
        sparkline: 'true',
      },
    });
    yield put(LoadCoinDetailSuccess(response.data));
  } catch (error) {
    yield put(LoadCoinDetailFail(error));
  }
}

export function* onLoadCoinDetailStart() {
  yield takeLatest(CoinsActionTypes.LOAD_COIN_DETAIL_START, LoadCoinsDetails);
}

export function* loadAllAvailableCoins() {
  try {
    const response = yield axios.get(allAvailableCoinsUrl, {
      params: {
        include_platform: false,
      },
    });

    yield put(LoadAllAvailableCoinsSuccess(response.data));
  } catch (error) {
    yield put(LoadAllAvailableCoinsFail(error));
  }
}

export function* onLoadAllAvailableCoinsStart() {
  yield takeLatest(
    CoinsActionTypes.LOAD_ALL_AVAILABLE_COINS_START,
    loadAllAvailableCoins,
  );
}

export function* getExchangeRate({payload}) {
  try {
    const response = yield axios.get(exchangeRateUrl, {
      params: {
        ids: payload,
        vs_currencies: 'usd',
      },
    });

    yield put(
      GetCoinExchangeRateSuccess({
        exchangeRate: response.data[payload],
        id: payload,
      }),
    );
  } catch (error) {
    yield put(GetCoinExchangeRateFail(error));
  }
}

export function* onGetExchangeRateStart() {
  yield takeLatest(
    CoinsActionTypes.GET_COIN_EXCHANGE_RATE_START,
    getExchangeRate,
  );
}

export function* coinsSaga() {
  yield all([
    call(onLoadCoinsOnCurrentPageStart),
    call(onLoadNewCoinsPageStart),
    call(onLoadCoinDetailStart),
    call(onLoadAllAvailableCoinsStart),
    call(onGetExchangeRateStart),
  ]);
}
