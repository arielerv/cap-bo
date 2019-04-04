/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';
import StateService from '../services/state';
import {succeededDepartments} from '../actions/states';

export function* fetchDepartments({state}) {
    console.log(state);
    const departments = yield call(StateService.find, state);
    yield put(succeededDepartments(departments));
}
