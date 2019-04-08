import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import {HashRouter} from 'react-router-dom';

import App from '../components/App';
import DevTools from './DevTools';

const Root = ({store}) => (
    <Provider store={store}>
        <Fragment>
            <DevTools/>
            <HashRouter>
                <App/>
            </HashRouter>
        </Fragment>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({}).isRequired
};

export default hot(module)(Root);
