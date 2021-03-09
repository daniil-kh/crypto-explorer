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
} from './coins.actions';

import {pageSelector} from './coins.selectors';

import {marketCoinsUrl, coinDetailUrl} from '../../constants/api';

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

export function* loadNewCoinsPage() {
  try {
    const prevPage = yield select(pageSelector);
    const currentPage = prevPage + 1;
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
    yield put(
      LoadNewCoinsPagesSuccess({page: currentPage, coinsData: response.data}),
    );
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

export function* coinsSaga() {
  yield all([
    call(onLoadCoinsOnCurrentPageStart),
    call(onLoadNewCoinsPageStart),
    call(onLoadCoinDetailStart),
  ]);
}
