import {find, get} from 'lodash';

const getRolesNames = (userRoles, AppRoles) => (
    userRoles.map(userRol => get(find(AppRoles, appRol => appRol._id === userRol), 'description'))
);

export default getRolesNames;
