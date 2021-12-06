import { all } from 'redux-saga/effects';
import purchasesSaga from './purchases';

export default function* sagas() {
  yield all([purchasesSaga()]);
}
