import axios from 'axios';
import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { getPurchases, types } from '../actions/purchases';

const SERVER = 'http://localhost:4001';

function* addPurchase({ payload }) {
  try {
    const { purchase } = payload;
    yield call(axios.post, `${SERVER}/purchases`, purchase);
  } catch (e) {
    console.log(e);
  }
}

function* addProductUse({ payload }) {
  try {
    const { id } = payload;
    yield call(axios.post, `${SERVER}/purchases/${id}/use`);
  } catch (e) {
    console.log(e);
  }
}

function* fetchPurchases() {
  try {
    const { data } = yield call(axios.get, `${SERVER}/purchases`);
    yield put(getPurchases(data));
  } catch (e) {
    console.error(e);
  }
}

function* updatePurchase({ payload }) {
  try {
    const { purchase } = payload;
    yield call(axios.put, `${SERVER}/purchases/${purchase.id}`, purchase);
  } catch (e) {
    console.error(e);
  }
}

export default function* purchasesSaga() {
  yield takeLeading(types.ADD_PURCHASE, addPurchase);
  yield takeLatest(types.ADD_PRODUCT_USE, addProductUse);
  yield takeLeading(types.FETCH_PURCHASES, fetchPurchases);
  yield takeLatest(types.UPDATE_PURCHASE, updatePurchase);
}
