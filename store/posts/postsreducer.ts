import { Reducer } from "react";
import { POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS, PostRequestAction, PostRequestErrorAction, PostRequestSuccessAction } from "./postsactions";

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
export type PostState = {
    loading: boolean;
    error: string;
    posts: IPostsData[];
}

type PostActions = PostRequestAction
    | PostRequestErrorAction
    | PostRequestSuccessAction;

export const postsReducer: Reducer<PostState, PostActions> = (state, action) => {
    
    switch (action.type) {
        case POST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case POST_REQUEST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts.concat(action.posts)],
                loading: false,
            }
        default:
            return state;
    }
};