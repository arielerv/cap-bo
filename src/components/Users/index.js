import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import UserEditor from './UserEditor';
import UsersList from './UsersList';

const Users = ({match: {path}}) => (
    <Switch>
        <Route path={`${path}/new`} component={UserEditor}/>
        <Route path={`${path}/:id`} component={UserEditor}/>
        <Route path={path} component={UsersList}/>
    </Switch>
);

Users.propTypes = {
    match: PropTypes.shape({path: PropTypes.string}).isRequired
};

export default Users;
