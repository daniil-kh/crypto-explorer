import {put, call, select, takeLatest, all, take} from 'redux-saga/effects';
import axios from 'axios';

import CoinsActionTypes from './coins.types';
import {
  LoadCoinsSuccess,
  LoadCoinsFail,
  LoadNewCoinsPagesSuccess,
  LoadNewCoinsPagesFail,
} from './coins.actions';

import {pageSelector} from './coins.selectors';

import {marketCoinsUrl} from '../../constants/api';

export function* loadCoinsOnCurrentPage() {
  try {
    const currentPage = yield select(pageSelector);
    const {data} = yield axios.get(marketCoinsUrl, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_decs',
        per_page: '15',
        page: currentPage,
        sparkline: 'true',
        price_change_percentage: '1h',
      },
    });
    yield put(LoadCoinsSuccess(data ? data : []));
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
    const {data} = yield axios.get(marketCoinsUrl, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_decs',
        per_page: '15',
        page: currentPage,
        sparkline: 'true',
        price_change_percentage: '1h',
      },
    });
    yield put(LoadNewCoinsPagesSuccess({page: currentPage, coinsData: data}));
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

export function* coinsSaga() {
  yield all([
    call(onLoadCoinsOnCurrentPageStart),
    call(onLoadNewCoinsPageStart),
  ]);
}
