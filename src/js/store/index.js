import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { symbolValidationMiddleware } from "../middleware";

const store = createStore(
    rootReducer,
    applyMiddleware(symbolValidationMiddleware)
);

export default store;