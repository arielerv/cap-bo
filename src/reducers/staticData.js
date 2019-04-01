import {STATIC_DATA_SUCCEEDED, STATIC_DATA_REQUESTED} from '../actions/staticData';

export default function staticData(state = {}, action) {
    switch (action.type) {
        case STATIC_DATA_REQUESTED:
            return {...state, roles: []};
        case STATIC_DATA_SUCCEEDED:
            return {...state, ...action.data};
        default:
            return state;
    }
}
