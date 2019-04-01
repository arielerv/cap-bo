/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {receiveStaticData} from '../actions/staticData';
import StaticDataService from '../services/staticData';
import {handleError} from '../actions/common';

export function* fetchStaticData() {
    try {
        const data = yield call(StaticDataService.fetch);
        yield put(receiveStaticData(data));
    } catch (err) {
        yield put(handleError(err));
    }
}
