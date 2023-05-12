import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/mereducer";
import { TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS, TokenRequestAction, TokenRequestErrorAction, TokenRequestSuccessAction } from "./token/tokenactions";
import { TokenState, saveToken } from "./token/tokenreducer";
import { POST_REQUEST, POST_REQUEST_ERROR, POST_REQUEST_SUCCESS, PostRequestAction, PostRequestErrorAction, PostRequestSuccessAction } from "./posts/postsactions";
import { PostState, postsReducer } from "./posts/postsreducer";

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
export type RootState = {
    commentText: string;
    token: TokenState;
    me: MeState;
    client_id: string;
    nextAfter: string;
    posts: PostState;
    count: number;
}


const initialState: RootState = {
    commentText: '',
    token: {
        token: '',
        loading: false,
        error: '',
    },
    me: {
        loading: false,
        error: '',
        data: {
            name: '',
            iconImg: '',
        },
    },
    client_id: 'IA85vJ_I8N_GNeF3UpzGng',
    nextAfter: '',
    posts: {
        loading: false,
        error: '',
        posts: []
    },
    count: 0,
};
const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
});

const UPDATE_AFTER = 'UPDATE_AFTER';
type UpdateAfterAction = {
    type: typeof UPDATE_AFTER;
    nextAfter: string;
}
export const updateAfter: ActionCreator<UpdateAfterAction> = (nextAfter: string) => ({
    type: UPDATE_AFTER,
    nextAfter,
});

const UPDATE_COUNT = 'UPDATE_COUNT';
type UpdateCountAction = {
    type: typeof UPDATE_COUNT;
    count: number;
}
export const updateCount: ActionCreator<UpdateCountAction> = (count: number) => ({
    type: UPDATE_COUNT,
    count,
});

type MyAction = UpdateCommentAction
    | UpdateAfterAction
    | UpdateCountAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction
    | TokenRequestAction
    | TokenRequestSuccessAction
    | TokenRequestErrorAction
    | PostRequestAction
    | PostRequestSuccessAction
    | PostRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case UPDATE_AFTER:
            return {
                ...state,
                nextAfter: action.nextAfter,
            };
        case UPDATE_COUNT:
            return {
                ...state,
                count: action.count,
            };
        case TOKEN_REQUEST:
        case TOKEN_REQUEST_SUCCESS:
        case TOKEN_REQUEST_ERROR:
            return {
                ...state,
                token: saveToken(state.token, action)
            }
        case ME_REQUEST:
        case ME_REQUEST_ERROR:
        case ME_REQUEST_SUCCESS:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        case POST_REQUEST:
        case POST_REQUEST_ERROR:
        case POST_REQUEST_SUCCESS:
            return {
                ...state,
                posts: postsReducer(state.posts, action)
            }
        default:
            return state;
    }
};