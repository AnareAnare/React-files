import { Reducer } from "react";
import { TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS, TokenRequestAction, TokenRequestErrorAction, TokenRequestSuccessAction } from "./tokenactions";

export type TokenState = {
    token: string;
    error: string;
    loading: boolean;
}

type TokenActions = TokenRequestAction
    | TokenRequestSuccessAction
    | TokenRequestErrorAction;

export const saveToken: Reducer<TokenState, TokenActions> = (state, action) => {
    switch (action.type) {
        case TOKEN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case TOKEN_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case TOKEN_REQUEST_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false,
            };
        default:
            return state;
    }
}