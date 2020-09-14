import { takeLatest } from 'redux-saga/effects';

function* onExample() {
  yield console.log('home--------');
}

export default function* sagas() {
  yield takeLatest('EXAMPLE_ACTION', onExample);
}
