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

function* addPurchase({ payload }) {
  try {
    const { purchase } = payload;
    yield call(axios.post, 'http://localhost:3001/purchases', purchase);
  } catch (e) {
    console.log(e);
  }
}

export default function* purchasesSaga() {
  yield takeLeading(types.FETCH_PURCHASES, fetchPurchases);
  yield takeLeading(types.ADD_PURCHASE, addPurchase);
}
