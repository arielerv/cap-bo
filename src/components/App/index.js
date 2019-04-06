import React, {Fragment} from 'react';
import {Switch} from 'react-router-dom';

import Header from './Header';
import Home from '../Home';
import Users from '../Users';
import Account from '../Account';
import Info from '../Information';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import SignIn from '../SignIn';
import {isAuthenticated} from '../../util';

const App = () => (
    <Fragment>
        {isAuthenticated() && <Header/>}
        <main>
            <Switch>
                <AuthRoute path="/signIn" component={SignIn}/>
                <PrivateRoute path="/info" component={Info}/>
                <PrivateRoute path="/account" component={Account}/>
                <PrivateRoute path="/users" component={Users}/>
                <PrivateRoute component={Home}/>
            </Switch>
        </main>
    </Fragment>
);

export default App;
