import React from 'react';
import PropTypes from 'prop-types';
import {Col, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

import {EmailField, TextField} from '../common/fields';
import {SaveButton} from '../common';

const AccountEditor = ({
    user, onChange, onSubmit, saving
}) => (
    <Form onSubmit={onSubmit} className="panel-container">
        <Row>
            <Col sm={12}>
                <h3>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                    Datos de la cuenta
                    <small className="pull-right">
                        Todos los campos son requeridos
                    </small>
                </h3>
            </Col>
            <Col sm={12}>
                <hr className="hr-title"/>
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <TextField
                    control="username"
                    label="Usuario"
                    maxLength={40}
                    minLength={2}
                    onChange={onChange}
                    value={user.name}
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
        <Row className="text-right">
            <Col sm={3} smOffset={9}>
                <SaveButton saving={saving} textButton="Actualizar"/>
            </Col>
        </Row>
    </Form>
);

AccountEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.shape({}),
    saving: PropTypes.bool
};

AccountEditor.defaultProps = {
    user: null,
    saving: false
};

export default AccountEditor;
