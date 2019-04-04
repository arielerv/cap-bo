/* global window */
import React, {Component} from 'react';
import {
    Grid, Row, Col, Button
} from 'react-bootstrap';
import LoginGoogle from 'react-google-login';
import LoginFacebook from 'react-facebook-login/dist/facebook-login-render-props';

import TokenService from '../../../services/token';
import LoginService from '../../../services/login';
import LoginForm from './LoginForm';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            working: false,
            error: false
        };
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    failedLoginGoogle() {
        this.setState(() => ({error: true, errorMessage: 'Ha ocurrido un error en el login.'}));
    }

    async handleSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;
        this.setState(() => ({working: true}));
        const token = await (new LoginService(TokenService)).login(username, password);
        this.setState(() => ({working: false}));
        if (token) {
            window.location = '/';
            return;
        }
        this.setState(() => ({
            error: true,
            errorMessage: 'Usuario y/o contraseña inválidos',
            password: '',
            username: ''
        }));
    }

    async responseFacebook(user) {
        try {
            const {email, surname, name} = user;
            const token = await (new LoginService(TokenService)).externalLogin(email, name, surname);
            if (token) {
                window.location = '/';
            }
        } catch (err) {
            this.setState(() => ({error: true, errorMessage: 'Ha ocurrido un error en el login.'}));
        }
    }

    async responseGoogle(user) {
        try {
            const {email, familyName, givenName} = user;
            const token = await (new LoginService(TokenService)).externalLogin(email, givenName, familyName);
            if (token) {
                window.location = '/';
            }
        } catch (err) {
            this.setState(() => ({error: true, errorMessage: 'Ha ocurrido un error en el login.'}));
        }
    }

    render() {
        const {
            username, working, password, errorMessage, error
        } = this.state;
        return (
            <Grid>
                <Row>
                    <Col sm={4} smOffset={4}>
                        <LoginForm
                            onChange={e => this.handleChange(e)}
                            onSubmit={e => this.handleSubmit(e)}
                            {...{
                                errorMessage, error, password, username, working
                            }}
                        />
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row className="text-center">
                    <LoginFacebook
                        appId="1295427660607337"
                        autoLoad
                        fields="name,surname,email,picture"
                        callback={user => this.responseFacebook(user)}
                        render={renderProps => (
                            <Button onClick={renderProps.onClick}>Login with Facebook</Button>
                        )}
                    />
                </Row>
                <br/>
                <Row className="text-center">
                    <LoginGoogle
                        clientId="476963071064-i0qg1ijlc54e5ahlf3oggc0su6mct8b8.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={user => this.responseGoogle(user.profileObj)}
                        onFailure={() => this.failedLoginGoogle()}
                        cookiePolicy="single_host_origin"
                        render={renderProps => (
                            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                Login with Google
                            </Button>
                        )}
                    />
                </Row>
            </Grid>
        );
    }
}

export default SignIn;
