import {requestFetchSessionUser} from '../actions/session';
import {requestStaticData} from '../actions/staticData';

export default function loadAsyncState(store) {
    store.dispatch(requestFetchSessionUser());
    store.dispatch(requestStaticData());
    return store;
}
