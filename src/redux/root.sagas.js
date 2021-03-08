import {call, all} from 'redux-saga/effects';

import {coinsSaga} from './coins/coins.sagas';

export default function* rootSaga() {
  yield all([call(coinsSaga)]);
}
