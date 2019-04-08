/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';
import configureStore from './store';
import './sass/app.scss';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
