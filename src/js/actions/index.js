import { ADD_STOCK, DATA_REQUESTED } from "../constants/action-types";

export function addStock(payload) {
    return { type: ADD_STOCK, payload }
}

export function getData(url) {
    return { type: DATA_REQUESTED, payload: { url } };
}