import {combineReducers} from 'redux';

import session from './session';
import user from './user';
import staticData from './staticData';

export default combineReducers({session, staticData, user});
