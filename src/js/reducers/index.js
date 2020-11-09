import { ADD_STOCK, API_ERRORED, DATA_LOADED } from "../constants/action-types";

const initialState = {
    stocks: [],
    stocksWithPrices: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_STOCK) {
        return Object.assign({}, state, {
            stocks: state.stocks.concat(action.payload)
          });
    }

    if (action.type === API_ERRORED) {
        return state;
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            stocksWithPrices: state.stocksWithPrices.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;