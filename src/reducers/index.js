import {combineReducers} from 'redux';

import session from './session';
import user from './user';
import staticData from './staticData';
import state from './state';

export default combineReducers({session, staticData, user, state});
