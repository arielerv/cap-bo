import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

import {PageHeader} from '../../common';
import {resetStatusEnum} from '../../../model';
import SignInService from '../../../services/login';
import FeedbackStatus from './FeedbackStatus';
import ResetPasswordForm from './ResetPasswordForm';

const requestValidateToken = token => SignInService.validateToken(token);

const requestSavePassword = (userId, token, password) => SignInService.resetPassword(userId, token, password);

class ResetPassword extends Component {
    static propTypes = {
        location: PropTypes.shape({
            search: PropTypes.string.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            token: new URLSearchParams(this.props.location.search).get('t'),
            resetStatus: resetStatusEnum.VALIDATING_TOKEN,
            user: {},
            password: null
        };
    }

    componentDidMount() {
        try {
            const token = new URLSearchParams(this.props.location.search).get('t');
            requestValidateToken(token).then(data => {
                if (!data.user) {
                    this.setState(() => ({resetStatus: data.result}));
                    return;
                }
                this.setState(() => ({resetStatus: resetStatusEnum.VALID_TOKEN, user: data.user}));
            });
        } catch (err) {
            this.setState(() => ({resetStatus: resetStatusEnum.HAS_ERROR}));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        try {
            const {user, token, password} = this.state;
            this.setState(() => ({resetStatus: resetStatusEnum.WORKING}));
            requestSavePassword(user._id, token, password).then(data => {
                this.setState(() => ({
                    resetStatus: data.success ? resetStatusEnum.SUCCEEDED : resetStatusEnum.HAS_ERROR
                }));
            });
        } catch (err) {
            this.setState(() => ({resetStatus: resetStatusEnum.HAS_ERROR}));
        }
    }

    handleChange({target: {id, value}}) {
        this.setState(() => ({[id]: value}));
    }

    render() {
        const {resetStatus, user, password} = this.state;
        return (
            <Grid>
                <PageHeader title="Gestión de contraseña" icon={faChevronCircleRight}/>
                <FeedbackStatus resetStatus={resetStatus}/>
                <ResetPasswordForm
                    onSubmit={e => this.handleSubmit(e)}
                    onChange={e => this.handleChange(e)}
                    {...{resetStatus, user, password}}
                />
            </Grid>
        );
    }
}

export default ResetPassword;
