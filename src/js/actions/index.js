import { DATA_REQUESTED } from "../constants/action-types";

export function getData(symbol) {
    return { type: DATA_REQUESTED, payload: { symbol } };
}