import {all, takeEvery, throttle} from 'redux-saga/effects';

import {ERROR_OCCURRED} from '../actions/common';
import {
    SESSION_CLEAN_REQUESTED,
    SESSION_FETCH_CURRENT_USER_REQUESTED,
    SESSION_FETCH_TOKEN_REQUESTED,
    SESSION_LOGIN_REQUESTED,
    SESSION_EXTERNAL_LOGIN_REQUESTED
} from '../actions/session';
import handleError from './common';
import {
    cleanSession, fetchSessionUser, fetchToken, fetchLogin, fetchExternalLogin
} from './session';
import {STATIC_DATA_REQUESTED} from '../actions/staticData';
import {fetchStaticData} from './staticData';
import {
    USER_FIND_REQUESTED,
    USER_REMOVE_REQUESTED,
    USER_SAVE_REQUESTED,
    USERS_FETCH_REQUESTED
} from '../actions/users';
import {
    fetchUsers, findUser, saveUser, removeUser
} from './user';
import {REQUEST_DEPARTMENTS} from '../actions/states';
import {fetchDepartments} from './state';

export default function* root() {
    yield all([
        takeEvery(ERROR_OCCURRED, handleError),
        takeEvery(STATIC_DATA_REQUESTED, fetchStaticData),
        takeEvery(SESSION_FETCH_CURRENT_USER_REQUESTED, fetchSessionUser),
        takeEvery(SESSION_FETCH_TOKEN_REQUESTED, fetchToken),
        takeEvery(SESSION_CLEAN_REQUESTED, cleanSession),
        takeEvery(USER_REMOVE_REQUESTED, removeUser),
        takeEvery(USER_FIND_REQUESTED, findUser),
        takeEvery(USER_SAVE_REQUESTED, saveUser),
        takeEvery(REQUEST_DEPARTMENTS, fetchDepartments),
        throttle(1000, USERS_FETCH_REQUESTED, fetchUsers),
        takeEvery(SESSION_LOGIN_REQUESTED, fetchLogin),
        takeEvery(SESSION_EXTERNAL_LOGIN_REQUESTED, fetchExternalLogin)
    ]);
}
