import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import PasswordEditor from './PasswordEditor';
import Profile from './Profile';
import SideMenu from './SideMenu';

const Account = ({match: {path}, history}) => (
    <Fragment>
        <SideMenu history={history}/>
        <Switch>
            <Route path={`${path}/password`} component={PasswordEditor}/>
            <Route component={Profile}/>
        </Switch>
    </Fragment>
);

Account.propTypes = {
    match: PropTypes.shape({path: PropTypes.string}).isRequired,
    history: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired
};

export default Account;
