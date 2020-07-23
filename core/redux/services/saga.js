import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getServices } from '../../api/services';
import { servicesActions } from './index';

function* onGetServices() {
  try {
    const response = yield getServices();
    yield put(servicesActions.getServicesSuccess(response));
  } catch (e) {
    yield put(servicesActions.getServicesError(e));
  }
}

function* onGetServicesListener() {
  yield takeLatest(servicesActions.getServices.type, onGetServices);
}

export default function* servicesSaga() {
  yield all([call(onGetServicesListener)]);
}
