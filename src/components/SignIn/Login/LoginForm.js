import React from 'react';
import PropTypes from 'prop-types';

import {
    Button, Form, FormControl, FormGroup
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {IconLinkButton} from '@indec/react-commons';

const LoginForm = ({
    onChange, username, password, error, working, errorMessage, onSubmit
}) => (
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
            />
        </FormGroup>
        <FormGroup>
            <Button type="submit" bsStyle="primary" className="btn-group-justified">
                Ingresar
            </Button>
            &nbsp;&nbsp;
            <IconLinkButton icon={faExclamationCircle} to="/passwordRecovery">
                Olvide mi contraseña
            </IconLinkButton>
        </FormGroup>
        {error && (
            <p>
                <FontAwesomeIcon icon={faExclamationCircle}/>
                &nbsp;
                {errorMessage}
                &nbsp;
                <FontAwesomeIcon icon={faExclamationCircle}/>
            </p>
        )}
        {working}
    </Form>
);

LoginForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    username: PropTypes.string,
    password: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    working: PropTypes.bool
};

LoginForm.defaultProps = {
    username: null,
    password: null,
    error: false,
    errorMessage: null,
    working: false
};

export default LoginForm;
