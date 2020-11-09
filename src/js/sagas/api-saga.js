import { takeEvery, call, put } from "redux-saga/effects";
import { API_ERRORED, DATA_LOADED, DATA_REQUESTED } from "../constants/action-types";

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga(action) {
    try {
        const payload = yield call(getData, action.payload.url);
        yield put({ type: DATA_LOADED, payload});
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

async function getData(url) {
    return fetch(url).then(response => response.json())
}