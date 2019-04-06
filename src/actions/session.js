export const SESSION_FETCH_CURRENT_USER_REQUESTED = 'SESSION_FETCH_CURRENT_USER_REQUESTED';
export const SESSION_FETCH_CURRENT_USER_SUCCEEDED = 'SESSION_FETCH_CURRENT_USER_SUCCEEDED';
export const SESSION_FETCH_TOKEN_REQUESTED = 'SESSION_FETCH_TOKEN_REQUESTED';
export const SESSION_FETCH_TOKEN_SUCCEEDED = 'SESSION_FETCH_TOKEN_SUCCEEDED';
export const SESSION_CLEAN_REQUESTED = 'SESSION_CLEAN_REQUESTED';
export const SESSION_LOGIN_REQUESTED = 'SESSION_LOGIN_REQUESTED';
export const SESSION_LOGIN_SUCCEEDED = 'SESSION_LOGIN_SUCCEEDED';
export const SESSION_EXTERNAL_LOGIN_REQUESTED = 'SESSION_EXTERNAL_LOGIN_REQUESTED';
export const SESSION_EXTERNAL_LOGIN_SUCCEDED = 'SESSION_EXTERNAL_LOGIN_SUCCEDED';
export const SESSION_SET_ERROR = 'SESSION_SET_ERROR';

export const requestFetchSessionUser = () => ({type: SESSION_FETCH_CURRENT_USER_REQUESTED});

export const receiveSessionUser = user => ({type: SESSION_FETCH_CURRENT_USER_SUCCEEDED, user});

export const requestSessionToken = () => ({type: SESSION_FETCH_TOKEN_REQUESTED});

export const receiveSessionToken = token => ({type: SESSION_FETCH_TOKEN_SUCCEEDED, token});

export const requestCleanSession = () => ({type: SESSION_CLEAN_REQUESTED});

export const requestLoginSession = (username, password) => ({type: SESSION_LOGIN_REQUESTED, username, password});

export const notifyAuthenticatedSuccessfully = authenticated => ({type: SESSION_LOGIN_SUCCEEDED, authenticated});

export const requestExternalLoginSession = externalUser => ({type: SESSION_EXTERNAL_LOGIN_REQUESTED, externalUser});

export const setError = (state, message) => ({type: SESSION_SET_ERROR, state, message});
