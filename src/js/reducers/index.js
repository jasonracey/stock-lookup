import { API_ERRORED, DATA_LOADED } from "../constants/action-types";

const initialState = {
    stocks: []
};

function rootReducer(state = initialState, action) {
    if (action.type === API_ERRORED) {
        return state;
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            stocks: state.stocks.concat(action.payload.quoteResponse.result)
        });
    }

    return state;
};

export default rootReducer;