import {requestFetchSessionUser} from '../actions/session';
import {requestStaticData} from '../actions/staticData';
import TokenService from '../services/token';

const hasToken = (token, store) => {
    if (token) {
        store.dispatch(requestFetchSessionUser());
    }
};

export default function loadAsyncState(store) {
    hasToken(TokenService.getToken(), store);
    store.dispatch(requestStaticData());
    return store;
}
