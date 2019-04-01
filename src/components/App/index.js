import React, {Fragment} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Home from '../Home';
import Users from '../Users';

const App = () => (
    <HashRouter>
        <Fragment>
            <Header/>
            <main>
                <Switch>
                    <Route path="/users" component={Users}/>
                    <Route component={Home}/>
                </Switch>
            </main>
            <Footer/>
        </Fragment>
    </HashRouter>
);

export default App;
