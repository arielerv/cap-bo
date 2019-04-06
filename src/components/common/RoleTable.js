import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Table, Panel} from 'react-bootstrap';
import {
    concat, includes, reject, uniq
} from 'lodash';

const handleChange = (role, selectedRoles, onChange) => {
    let roles;
    if (includes(selectedRoles, role)) {
        roles = reject(selectedRoles, rol => rol === role);
    } else {
        roles = uniq(concat(selectedRoles, [role]));
    }
    onChange(roles);
};

const RoleTable = ({roles, selectedRoles, onChange}) => (
    <Panel>
        <Panel.Heading>Roles</Panel.Heading>
        <Table responsive striped bordered condensed hover>
            <tbody>
                {roles.map(role => (
                    <tr key={role._id}>
                        <td>
                            <Checkbox
                                value={role._id}
                                onChange={e => handleChange(e.target.value, selectedRoles, onChange)}
                                checked={includes(selectedRoles, role._id)}
                            >
                                &nbsp;
                                {role.description}
                            </Checkbox>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Panel>
);

RoleTable.propTypes = {
    onChange: PropTypes.func.isRequired,
    roles: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    selectedRoles: PropTypes.arrayOf(PropTypes.string)
};

RoleTable.defaultProps = {
    selectedRoles: []
};

export default RoleTable;
