import {
    SUCCEEDED_DEPARTMENTS,
    REQUEST_DEPARTMENTS
} from '../actions/states';

export default function states(state = {departments: []}, action) {
    switch (action.type) {
        case REQUEST_DEPARTMENTS:
            return {...state, loading: true};
        case SUCCEEDED_DEPARTMENTS:
            return {...state, loading: false, departments: action.departments};
        default:
            return state;
    }
}
