import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Login from './Login';
import PasswordRecovery from './PasswordRecovery';
import ResetPassword from './ResetPassword';

const SignIn = ({match: {path}}) => (
    <HashRouter>
        <main>
            <Switch>
                <Route path={`${path}/resetPassword`} component={ResetPassword}/>
                <Route path={`${path}/passwordRecovery`} component={PasswordRecovery}/>
                <Route component={Login}/>
            </Switch>
        </main>
    </HashRouter>
);

SignIn.propTypes = {
    match: PropTypes.shape({path: PropTypes.string}).isRequired
};

export default SignIn;
