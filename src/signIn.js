/* global window document */
import React from 'react';
import ReactDOM from 'react-dom';
import TokenService from './services/token';

import SignIn from './components/SignIn';
import './sass/sign-in.scss';

if (TokenService.getToken()) {
    window.location = '/';
}

ReactDOM.render(
    <SignIn/>,
    document.getElementById('root')
);
