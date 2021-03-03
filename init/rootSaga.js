// Core
import { all } from 'redux-saga/effects';

// Workers
import { watchCats } from '../bus/cats/saga/watchers';

export function* rootSaga() {
  yield all([ watchCats() ]);
};
