/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import TokenService from '../../services/token';

const isAuthenticated = () => !!TokenService.getToken();

const AuthRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            !isAuthenticated() ? <Component {...props}/> : (
                <Redirect to={{pathname: '/', state: {from: props.location}}}/>
            )
        )}
    />
);

AuthRoute.propTypes = {
    component: PropTypes.element.isRequired
};

export default AuthRoute;
