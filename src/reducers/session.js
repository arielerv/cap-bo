import {SESSION_FETCH_CURRENT_USER_SUCCEEDED, SESSION_FETCH_TOKEN_SUCCEEDED} from '../actions/session';

export default function session(state = {roles: []}, action) {
    switch (action.type) {
        case SESSION_FETCH_CURRENT_USER_SUCCEEDED:
            return {...state, user: action.user, roles: action.user.roles};
        case SESSION_FETCH_TOKEN_SUCCEEDED:
            return {...state, token: action.token};
        default:
            return state;
    }
}
