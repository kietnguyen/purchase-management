import axios from 'axios';
import { call, put, takeLeading } from 'redux-saga/effects';
import { getPurchases, types } from '../actions/purchases';

function* fetchPurchases() {
  try {
    const { data } = yield call(axios.get, 'http://localhost:3001/purchases');
    yield put(getPurchases(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* purchasesSaga() {
  yield takeLeading(types.FETCH_PURCHASES, fetchPurchases);
}
