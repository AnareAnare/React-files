import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import axios from "axios";

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export type TokenRequestAction = {
    type: typeof TOKEN_REQUEST;
}
export const tokenRequest: ActionCreator<TokenRequestAction> = () => ({
    type: TOKEN_REQUEST,
});


export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export type TokenRequestSuccessAction = {
    type: typeof TOKEN_REQUEST_SUCCESS;
    token: string;
}
export const tokenRequestSuccess: ActionCreator<TokenRequestSuccessAction> = (token: string) => ({
    type: TOKEN_REQUEST_SUCCESS,
    token,
});

export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';
export type TokenRequestErrorAction = {
    type: typeof TOKEN_REQUEST_ERROR;
    error: string;
}
export const tokenRequestError: ActionCreator<TokenRequestErrorAction> = (error: string) => ({
    type: TOKEN_REQUEST_ERROR,
    error,
});

export const tokenRequestAsync = (code: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(tokenRequest());
        axios.post(
            'https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
            {
                auth: { username: getState().client_id, password: 'zVKOIav1X6XbUfNz19TfPgNyWtIsVg' },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        )
            .then((resp) => {
                const token = resp.data.access_token;
                dispatch(tokenRequestSuccess(token));
            })
            .catch((error) => {
                console.log(error);
                dispatch(tokenRequestError(String(error)));
            });
}