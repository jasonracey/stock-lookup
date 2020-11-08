import { ADD_STOCK } from "../constants/action-types.js";

export function addStock(payload) {
    return { type: ADD_STOCK, payload }
};