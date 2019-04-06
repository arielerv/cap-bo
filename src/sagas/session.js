import {call, put, delay} from 'redux-saga/effects';
import TokenService from '../services/token';

import {handleError} from '../actions/common';
import {receiveSessionUser, receiveSessionToken, notifyAuthenticatedSuccessfully} from '../actions/session';
import SessionService from '../services/session';

export function* fetchSessionUser() {
    try {
        const {user} = yield call(SessionService.fetchCurrent);
        yield put(receiveSessionUser(user));
        if (user) {
            yield put(notifyAuthenticatedSuccessfully(true));
        }
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* fetchToken() {
    try {
        yield put(receiveSessionToken(TokenService.getToken()));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* cleanSession() {
    yield call(TokenService.clear);
}

export function* fetchLogin({username, password}) {
    try {
        const user = yield call(SessionService.fetchLogin, username, password);
        yield put(receiveSessionUser(user));
        if (user) {
            yield put(notifyAuthenticatedSuccessfully());
        }
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* fetchExternalLogin({externalUser}) {
    try {
        const user = yield call(SessionService.fetchExternalLogin, externalUser);
        yield put(receiveSessionUser(user));
        if (user) {
            yield put(notifyAuthenticatedSuccessfully());
        }
    } catch (err) {
        yield put(handleError(err));
    }
}
