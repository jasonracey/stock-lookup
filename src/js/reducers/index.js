import { ADD_STOCK } from "../constants/action-types.js";

const initialState = {
    stocks: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_STOCK) {
        return Object.assign({}, state, {
            stocks: state.stocks.concat(action.payload)
          });
    }
    return state;
};

export default rootReducer;