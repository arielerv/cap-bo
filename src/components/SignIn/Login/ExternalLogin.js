import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import LoginGoogle from 'react-google-login';
import LoginFacebook from 'react-facebook-login/dist/facebook-login-render-props';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

import {IconButton} from '../../common';

const ExternalLogin = ({resFacebook, resGoogle, failedLogin}) => (
    <Row>
        <Col sm={6} className="text-right">
            <LoginFacebook
                appId="1295427660607337"
                autoLoad={false}
                callback={resFacebook}
                fields="name,email,picture,first_name,last_name"
                render={renderProps => (
                    <IconButton onClick={renderProps.onClick} icon={faFacebook}>
                        Ingresar con Facebook
                    </IconButton>
                )}
            />
        </Col>
        <Col sm={6}>
            <LoginGoogle
                clientId="476963071064-i0qg1ijlc54e5ahlf3oggc0su6mct8b8.apps.googleusercontent.com"
                buttonText="Login with google"
                onSuccess={resGoogle}
                onFailure={failedLogin}
                cookiePolicy="single_host_origin"
                render={renderProps => (
                    <IconButton
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        icon={faGoogle}
                    >
                        Ingresar con Google
                    </IconButton>
                )}
            />
        </Col>
    </Row>
);

ExternalLogin.propTypes = {
    resFacebook: PropTypes.func.isRequired,
    resGoogle: PropTypes.func.isRequired,
    failedLogin: PropTypes.func.isRequired
};

export default ExternalLogin;
