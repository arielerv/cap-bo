import {filter} from 'lodash';

import {
    USERS_FETCH_REQUESTED,
    USERS_FETCH_SUCCEEDED,
    USER_FIND_SUCCEEDED,
    USER_SAVE_REQUESTED,
    USER_SAVE_SUCCEEDED,
    USER_REMOVED_SUCCEEDED,
    USER_SET
} from '../actions/users';

export default function user(state = {}, action) {
    switch (action.type) {
        case USERS_FETCH_REQUESTED:
            return {...state, loading: true};
        case USERS_FETCH_SUCCEEDED:
            return {
                ...state,
                users: action.users,
                loading: false
            };
        case USER_FIND_SUCCEEDED:
            return {...state, user: action.user};
        case USER_SAVE_REQUESTED:
            return {...state, saving: true};
        case USER_SAVE_SUCCEEDED:
            return {...state, saving: false};
        case USER_SET:
            return {...state, user: action.user};
        case USER_REMOVED_SUCCEEDED:
            return {...state, users: filter(state.users, u => u._id !== action.id)};
        default:
            return state;
    }
}
