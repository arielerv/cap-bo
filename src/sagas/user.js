import {call, put} from 'redux-saga/effects';

import {
    receiveUsers,
    receiveUser,
    notifyUserSavedSuccessfully,
    notifyRemovedUserSucceeded
} from '../actions/users';
import {handleError} from '../actions/common';

import UserService from '../services/user';

export function* fetchUsers() {
    const {users} = yield call(UserService.fetch);
    yield put(receiveUsers(users));
}

export function* findUser({id}) {
    const {user} = yield call(UserService.find, id);
    yield put(receiveUser(user));
}

export function* saveUser({user}) {
    yield call(UserService.save, user);
    yield put(notifyUserSavedSuccessfully());
}

export function* removeUser({id}) {
    try {
        yield call(UserService.remove, id);
        yield put(notifyRemovedUserSucceeded(id));
    } catch (err) {
        yield put(handleError(err));
    }
}
