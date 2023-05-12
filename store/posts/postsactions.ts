import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, updateAfter, updateCount } from "../reducer";
import axios from "axios";

export interface IPostsData {
    author: string;
    id?: string;
    created: number;
    num_comments?: number;
    score?: number;
    subreddit?: string;
    title: string;
    thumbnail?: string;
    sr_detail?: { icon_img?: string };
    selftext?: string;
}
interface IOnlyPosts {
    data: IPostsData[];
  }

export const POST_REQUEST = 'POST_REQUEST';
export type PostRequestAction = {
    type: typeof POST_REQUEST;
}
export const postRequest: ActionCreator<PostRequestAction> = () => ({
    type: POST_REQUEST
});

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
    type: typeof POST_REQUEST_SUCCESS;
    posts: IPostsData[];
}
export const postRequestSuccess: ActionCreator<PostRequestSuccessAction> = (posts: IPostsData[]) => ({
    type: POST_REQUEST_SUCCESS,
    posts,
});

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export type PostRequestErrorAction = {
    type: typeof POST_REQUEST_ERROR;
    error: string;
}
export const postRequestError: ActionCreator<PostRequestErrorAction> = (error: string) => ({
    type: POST_REQUEST_ERROR,
    error,
});

export const postRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(postRequest());
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true',
        {
            headers: { Authorization: `bearer ${getState().token.token}` },
            params: { after: getState().nextAfter, },
        })
        .then((resp) => {
            const postsD = resp.data;
            const postsData = postsD.data.children;
            const after = postsD.data.after;
            const onlyPostsInfo = postsData.map((el: IOnlyPosts) => {
                return el.data;
            });
            dispatch(updateAfter(after));
            dispatch(updateCount(getState().count + 1));
            dispatch(postRequestSuccess(onlyPostsInfo));
        })
        .catch((error) => {
            dispatch(postRequestError(String(error)));
        })
}