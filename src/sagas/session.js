/* global window */
import {call, put} from 'redux-saga/effects';
import TokenService from '../services/token';

import {handleError} from '../actions/common';
import {receiveSessionUser, receiveSessionToken} from '../actions/session';
import SessionService from '../services/session';

export function* fetchSessionUser() {
    try {
        const {user} = yield call(SessionService.fetchCurrent);
        yield put(receiveSessionUser(user));
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
    window.location = '/signIn.html';
}
