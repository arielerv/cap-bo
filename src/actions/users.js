export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';
export const USERS_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED';
export const USER_FIND_REQUESTED = 'USERS_FIND_REQUESTED';
export const USER_FIND_SUCCEEDED = 'USER_FIND_SUCCEEDED';
export const USER_SAVE_REQUESTED = 'USER_SAVE_REQUESTED';
export const USER_SAVE_SUCCEEDED = 'USER_SAVE_SUCCEEDED';
export const USER_REMOVE_REQUESTED = 'USER_REMOVE_REQUESTED';
export const USER_REMOVED_SUCCEEDED = 'USER_REMOVED_SUCCEEDED';
export const USER_SET = 'USER_SET';

export const requestUsers = () => ({type: USERS_FETCH_REQUESTED});

export const receiveUsers = users => ({type: USERS_FETCH_SUCCEEDED, users});

export const requestUser = id => ({type: USER_FIND_REQUESTED, id});

export const receiveUser = user => ({type: USER_FIND_SUCCEEDED, user});

export const requestSaveUser = user => ({type: USER_SAVE_REQUESTED, user});

export const notifyUserSavedSuccessfully = () => ({type: USER_SAVE_SUCCEEDED});

export const requestRemoveUser = id => ({type: USER_REMOVE_REQUESTED, id});

export const notifyRemovedUserSucceeded = id => ({type: USER_REMOVED_SUCCEEDED, id});

export const setUser = user => ({type: USER_SET, user});
