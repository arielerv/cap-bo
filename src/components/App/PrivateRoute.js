/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import {isAuthenticated} from '../../util';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated() ? <Component {...props}/> : (
                <Redirect to={{pathname: '/signIn', state: {from: props.location}}}/>
            )
        )}
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.element.isRequired
};

export default PrivateRoute;
