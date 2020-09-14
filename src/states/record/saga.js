import { takeLatest } from 'redux-saga/effects';

function* onRecord() {
  yield console.log('onRecord--------');
}

export default function* sagas() {
  yield takeLatest('RECORD_ACTION', onRecord);
}
