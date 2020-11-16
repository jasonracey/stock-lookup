import { takeEvery, call, put } from "redux-saga/effects";
import { trackPromise } from 'react-promise-tracker';
import { API_ERRORED, DATA_LOADED, DATA_REQUESTED } from "../constants/action-types";

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga(action) {
    try {
        const payload = yield call(getData, action.payload.symbol);
        yield put({ type: DATA_LOADED, payload});
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

async function getData(symbol) {
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${symbol}`;
    return trackPromise(fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })).then(response => response.json())
}