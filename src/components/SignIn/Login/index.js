/* eslint camelcase: ["error", {ignoreDestructuring: true, properties: "never"}] */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {faSpinner, faTimes} from '@fortawesome/free-solid-svg-icons';

import {requestLoginSession, requestExternalLoginSession, setError} from '../../../actions/session';
import LoginForm from './LoginForm';
import {MessageIndicator} from '../../common';
import ExternalLogin from './ExternalLogin';

class SignIn extends PureComponent {
    static propTypes = {
        requestLoginSession: PropTypes.func.isRequired,
        requestExternalLoginSession: PropTypes.func.isRequired,
        setError: PropTypes.func.isRequired,
        authenticated: PropTypes.bool,
        loading: PropTypes.bool,
        error: PropTypes.bool,
        messageError: PropTypes.string,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired
    };

    static defaultProps = {
        authenticated: null,
        loading: false,
        error: false,
        messageError: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.authenticated && this.props.authenticated) {
            this.props.history.push('/');
        }
    }

    failedExternalLogin() {
        this.props.setError(true, 'Fallo login con enlace externo');
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;
        this.props.requestLoginSession(username, password);
    }

    responseFacebook({
        userID, first_name, last_name, email, picture
    }) {
        if (!email) {
            this.props.setError(true, 'Para ingresar por facebook, debe informar un email válido');
        } else {
            this.props.requestExternalLoginSession({
                id: userID,
                name: first_name,
                surname: last_name,
                image: picture.url,
                email
            });
        }
    }

    responseGoogle({
        email, familyName, givenName, googleId, imageUrl
    }) {
        this.props.requestExternalLoginSession({
            id: googleId,
            name: givenName,
            surname: familyName,
            image: imageUrl,
            email
        });
    }

    render() {
        const {username, password} = this.state;
        const {error, loading, messageError} = this.props;
        return (
            <Grid>
                <LoginForm
                    {...{password, username}}
                    onChange={e => this.handleChange(e)}
                    onSubmit={e => this.handleSubmit(e)}
                    disabled={loading}
                />
                <br/>
                {loading && <MessageIndicator icon={faSpinner} pulse/>}
                {error && <MessageIndicator icon={faTimes} label={messageError}/>}
                <br/>
                <ExternalLogin
                    resFacebook={user => this.responseFacebook(user)}
                    failedLogin={() => this.failedExternalLogin()}
                    resGoogle={user => this.responseGoogle(user.profileObj)}
                />
            </Grid>
        );
    }
}

export default connect(
    state => ({
        authenticated: state.session.authenticated,
        error: state.session.error,
        loading: state.session.loading,
        messageError: state.session.message
    }),
    dispatch => ({
        requestLoginSession: (username, password) => dispatch(requestLoginSession(username, password)),
        requestExternalLoginSession: externalUser => dispatch(requestExternalLoginSession(externalUser)),
        setError: (state, message) => dispatch(setError(state, message))
    })
)(SignIn);
