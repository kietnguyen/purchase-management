import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { resetPurchase } from '../actions/purchase';
import { getPurchases, types } from '../actions/purchases';
import axios from '../config/axiosInstance';

function* addPurchase({ payload }) {
  try {
    const { purchase } = payload;
    yield call(axios.post, `/purchases`, purchase);
    yield put(resetPurchase());
  } catch (e) {
    console.log(e);
  }
}

function* addProductUse({ payload }) {
  try {
    const { id } = payload;
    yield call(axios.post, `/purchases/${id}/use`);
  } catch (e) {
    console.log(e);
  }
}

function* fetchPurchases() {
  try {
    const { data } = yield call(axios.get, `/purchases`);
    yield put(getPurchases(data));
  } catch (e) {
    console.error(e);
  }
}

function* removePurchase({ payload }) {
  try {
    const { id } = payload;
    yield call(axios.delete, `/purchases/${id}`);
  } catch (e) {
    console.error(e);
  }
}

function* updatePurchase({ payload }) {
  try {
    const { purchase } = payload;
    yield call(axios.put, `/purchases/${purchase.id}`, purchase);
    yield put(resetPurchase());
  } catch (e) {
    console.error(e);
  }
}

export default function* purchasesSaga() {
  yield takeLeading(types.ADD_PURCHASE, addPurchase);
  yield takeLatest(types.ADD_PRODUCT_USE, addProductUse);
  yield takeLatest(types.REMOVE_PURCHASE, removePurchase);
  yield takeLeading(types.FETCH_PURCHASES, fetchPurchases);
  yield takeLatest(types.UPDATE_PURCHASE, updatePurchase);
}
