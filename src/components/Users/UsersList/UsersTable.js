import React from 'react';
import PropTypes from 'prop-types';
import {
    ButtonGroup, Col, Row, Table
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faTrash, faWrench} from '@fortawesome/free-solid-svg-icons';
import {IconLinkButton, IconButton} from '../../common';

import QueryStringService from '../../../services/queryString';
import DateUtilsService from '../../../services/dateUtils';
import {getRolesNames} from '../../../util';

const UsersTable = ({users, onRemove, roles}) => (
    <Row>
        <Col sm={12}>
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>
                            Usuario
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Creado
                        </th>
                        <th>
                            Roles
                        </th>
                        <th>
                            E-mail
                        </th>
                        <th className="text-center">
                            <FontAwesomeIcon icon={faWrench}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="table-vertical-middle ta-user-row">
                            <td className="ta-username">
                                {user.username}
                            </td>
                            <td className="ta-name">
                                {user.name}
                            </td>
                            <td className="ta-surname">
                                {user.surname}
                            </td>
                            <td className="ta-email">
                                {DateUtilsService.formatDate(user.createdAt)}
                            </td>
                            <td className="ta-email">
                                {getRolesNames(user.roles, roles).join(', ')}
                            </td>
                            <td className="ta-email">
                                {user.email}
                            </td>
                            <td className="text-center">
                                <ButtonGroup>
                                    <IconLinkButton
                                        to={`/users/new${QueryStringService.build({id: user._id})}`}
                                        title="Editar"
                                        icon={faPencilAlt}
                                    />
                                    <IconButton
                                        icon={faTrash}
                                        title="Eliminar"
                                        onClick={() => onRemove(user)}
                                    />
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    </Row>
);

UsersTable.propTypes = {
    onRemove: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({})),
    roles: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

UsersTable.defaultProps = {
    users: []
};

export default UsersTable;
