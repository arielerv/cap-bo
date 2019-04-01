export const SESSION_FETCH_CURRENT_USER_REQUESTED = 'SESSION_FETCH_CURRENT_USER_REQUESTED';
export const SESSION_FETCH_CURRENT_USER_SUCCEEDED = 'SESSION_FETCH_CURRENT_USER_SUCCEEDED';

export const requestFetchSessionUser = () => ({type: SESSION_FETCH_CURRENT_USER_REQUESTED});

export const receiveSessionUser = user => ({type: SESSION_FETCH_CURRENT_USER_SUCCEEDED, user});

export const SESSION_FETCH_TOKEN_REQUESTED = 'SESSION_FETCH_TOKEN_REQUESTED';
export const SESSION_FETCH_TOKEN_SUCCEEDED = 'SESSION_FETCH_TOKEN_SUCCEEDED';

export const requestSessionToken = () => ({type: SESSION_FETCH_TOKEN_REQUESTED});

export const receiveSessionToken = token => ({type: SESSION_FETCH_TOKEN_SUCCEEDED, token});

export const SESSION_CLEAN_REQUESTED = 'SESSION_CLEAN_REQUESTED';

export const requestCleanSession = () => ({type: SESSION_CLEAN_REQUESTED});
