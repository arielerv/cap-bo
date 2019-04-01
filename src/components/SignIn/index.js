import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';

import Login from './Login';
import PasswordRecovery from './PasswordRecovery';
import ResetPassword from './ResetPassword';

const SignIn = () => (
    <HashRouter>
        <main>
            <Switch>
                <Route path="/resetPassword" component={ResetPassword}/>
                <Route path="/passwordRecovery" component={PasswordRecovery}/>
                <Route component={Login}/>
            </Switch>
        </main>
    </HashRouter>
);

export default hot(module)(SignIn);
