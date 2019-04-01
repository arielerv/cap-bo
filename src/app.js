/* global window document */
import React from 'react';
import ReactDOM from 'react-dom';

import TokenService from './services/token';
import Root from './containers/Root';
import configureStore from './store';
import './sass/app.scss';

const hasToken = () => {
    if (!TokenService.getToken()) {
        window.location = '/signIn.html';
        return null;
    }
    return true;
};

const store = configureStore();

ReactDOM.render(
    hasToken() && <Root store={store}/>,
    document.getElementById('root')
);
