import { 
    DATA_REQUESTED, 
    INVALID_SYMBOL_CHARACTERS,
    INVALID_SYMBOL_LENGTH 
} from "../constants/action-types";

const minSymbolLength = 1;
const maxSymbolLength = 15;

const validSymbolCharacters = new RegExp("^[\x21-\x7F]+$");

export function symbolValidationMiddleware({ dispatch }) {
    return function(next){
        return function(action){
            if (action.type === DATA_REQUESTED) {

                const symbol = action?.payload?.symbol ?? "";

                if (!symbolLengthIsValid(symbol)) {
                    return dispatch({ type: INVALID_SYMBOL_LENGTH });
                 }

                if (!symbolCharactersAreValid(symbol)) {
                    return dispatch({ type: INVALID_SYMBOL_CHARACTERS });
                 }
            }
            return next(action);
        };
    };
}

function symbolLengthIsValid(symbol) {
    const length = symbol?.length ?? 0;
    return length >= minSymbolLength && length <= maxSymbolLength;
}

function symbolCharactersAreValid(symbol) {
    return validSymbolCharacters.test(symbol ?? "");
}