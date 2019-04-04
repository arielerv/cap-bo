import React, {Fragment} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Home from '../Home';
import Users from '../Users';
import Account from '../Account';
import Info from '../Information';

const App = () => (
    <HashRouter>
        <Fragment>
            <Header/>
            <main>
                <Switch>
                    <Route path="/info" component={Info}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/users" component={Users}/>
                    <Route component={Home}/>
                </Switch>
            </main>
        </Fragment>
    </HashRouter>
);

export default App;
