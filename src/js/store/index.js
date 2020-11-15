import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import {symbolValidationMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initializeSagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(symbolValidationMiddleware, initializeSagaMiddleware)
);

initializeSagaMiddleware.run(apiSaga);

export default store;