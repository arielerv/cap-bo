import React from 'react';
import PropTypes from 'prop-types';
import {Col, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

import {TextField, DateField, Dropdown} from '../common/fields';
import {SaveButton} from '../common';

const GeneralEditor = ({
    user, onChange, onSubmit, saving, states, departments, onChangeState
}) => (
    <Form onSubmit={onSubmit} className="panel-container">
        <Row>
            <Col sm={12}>
                <h3>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                    Datos generales
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
                <DateField
                    control="birthDate"
                    label="Fecha nac."
                    onChange={onChange}
                    value={user.birthday}
                />
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <Dropdown
                    control="state"
                    label="Provincia"
                    value={user.state}
                    options={states}
                    onChange={onChangeState}
                />
            </Col>
            <Col sm={4}>
                <Dropdown
                    control="department"
                    label="Localidad"
                    value={user.department}
                    options={departments}
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

GeneralEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChangeState: PropTypes.func.isRequired,
    user: PropTypes.shape({}),
    saving: PropTypes.bool,
    states: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    departments: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

GeneralEditor.defaultProps = {
    user: null,
    saving: false
};

export default GeneralEditor;
