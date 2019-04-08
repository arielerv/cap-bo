import {
    SESSION_EXTERNAL_LOGIN_REQUESTED,
    SESSION_FETCH_CURRENT_USER_SUCCEEDED,
    SESSION_FETCH_TOKEN_SUCCEEDED,
    SESSION_LOGIN_REQUESTED,
    SESSION_LOGIN_SUCCEEDED,
    SESSION_SET_ERROR
} from '../actions/session';

export default function session(state = {}, action) {
    switch (action.type) {
        case SESSION_FETCH_CURRENT_USER_SUCCEEDED:
            return {...state, user: action.user};
        case SESSION_FETCH_TOKEN_SUCCEEDED:
            return {...state, token: action.token};
        case SESSION_LOGIN_SUCCEEDED:
            return {...state, authenticated: true, loading: false};
        case SESSION_LOGIN_REQUESTED:
            return {...state, loading: true, authenticated: false};
        case SESSION_EXTERNAL_LOGIN_REQUESTED:
            return {...state, authenticated: false, loading: true};
        case SESSION_SET_ERROR:
            return {...state, message: action.message, error: action.state};
        default:
            return state;
    }
}
