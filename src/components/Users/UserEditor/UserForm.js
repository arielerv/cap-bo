import React from 'react';
import PropTypes from 'prop-types';
import {Col, Form, Row} from 'react-bootstrap';

import {
    NumberField, EmailField, TextField, SaveButton, Dropdown
} from '@indec/react-commons';

import {RoleTable} from '../../common';

const UserForm = ({
    user, onChange, onSubmit, saving, roles, onChangeRole, typePasswordOptions
}) => (
    <Form onSubmit={onSubmit}>
        <Row>
            <Col sm={4}>
                <TextField
                    control="name"
                    label="Nombre"
                    maxLength={40}
                    minLength={2}
                    onChange={onChange}
                    value={user.name}
                />
            </Col>
            <Col sm={4}>
                <TextField
                    control="surname"
                    label="Apellido"
                    maxLength={40}
                    minLength={2}
                    onChange={onChange}
                    value={user.surname}
                />
            </Col>
            <Col sm={4}>
                <EmailField
                    control="email"
                    label="E-mail"
                    value={user.email}
                    onChange={onChange}
                />
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <NumberField
                    control="documentId"
                    label="DNI (sin puntos)"
                    min={1000000}
                    max={99999999}
                    onChange={onChange}
                    value={user.documentId}
                />
            </Col>
            <Col sm={4}>
                <TextField
                    control="username"
                    disabled={!!user._id}
                    label="Usuario"
                    maxLength={20}
                    minLength={2}
                    onChange={onChange}
                    value={user.username}
                />
            </Col>
            {!user._id && (
                <Col sm={4}>
                    <Dropdown
                        onChange={onChange}
                        control="typePassword"
                        label="Contraseña"
                        value={user.typePassword}
                        options={typePasswordOptions}
                    />
                </Col>
            )}
        </Row>
        {!user._id && user.typePassword === 2 && (
            <Row>
                <Col sm={4}>
                    <TextField
                        control="password"
                        label="Contraseña"
                        maxLength={20}
                        minLength={2}
                        onChange={onChange}
                        value={user.password}
                    />
                </Col>
            </Row>
        )}
        <Row>
            <Col sm={4}>
                <RoleTable
                    selectedRoles={user.roles}
                    onChange={onChangeRole}
                    roles={roles}
                />
            </Col>
        </Row>
        <Row className="text-right">
            <Col sm={3} smOffset={9}>
                <SaveButton saving={saving}/>
            </Col>
        </Row>
    </Form>
);

UserForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.shape({}),
    saving: PropTypes.bool,
    roles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onChangeRole: PropTypes.func.isRequired,
    typePasswordOptions: PropTypes.arrayOf(PropTypes.shape).isRequired
};

UserForm.defaultProps = {
    user: null,
    saving: false
};

export default UserForm;
