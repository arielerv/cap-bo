import React from 'react';
import PropTypes from 'prop-types';

import {
    Button, Form, FormControl, FormGroup, Col, Row
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

import {IconLinkButton} from '../../common';

const LoginForm = ({
    onChange, username, password, onSubmit, disabled
}) => (
    <Row>
        <Col sm={4} className="center-block">
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <h3 className="text-center">
                        <FontAwesomeIcon icon={faPowerOff}/>
                        &nbsp;Iniciar sesión
                    </h3>
                </FormGroup>
                <FormGroup>
                    <FormControl
                        name="username"
                        value={username}
                        placeholder="Usuario"
                        required
                        onChange={onChange}
                        disabled={disabled}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Contraseña"
                        required
                        onChange={onChange}
                        disabled={disabled}
                    />
                </FormGroup>
                <FormGroup>
                    <Col sm={6}>
                        <IconLinkButton
                            icon={faExclamationCircle}
                            to="signIn/passwordRecovery"
                            className="btn-group-justified"
                            disabled={disabled}
                        >
                            Recuperar clave
                        </IconLinkButton>
                    </Col>
                    <Col sm={6}>
                        <Button type="submit" bsStyle="primary" className="btn-group-justified" disabled={disabled}>
                            Ingresar
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    </Row>
);

LoginForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    username: PropTypes.string,
    password: PropTypes.string,
    disabled: PropTypes.bool
};

LoginForm.defaultProps = {
    username: null,
    password: null,
    disabled: false
};

export default LoginForm;
