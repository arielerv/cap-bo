import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import {PageHeader} from '@indec/react-commons';

import {recoveryStatusEnum} from '../../../model';
import SignInService from '../../../services/login';
import FeedbackStatus from './FeedbackStatus';
import PasswordRecoveryForm from './PasswordRecoveryForm';

const requestPasswordRecovery = username => SignInService.sendPasswordRecovery(username);

class PasswordRecovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            recoveryStatus: recoveryStatusEnum.READY
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        try {
            const {username} = this.state;
            this.setState(() => ({recoveryStatus: recoveryStatusEnum.WORKING}));
            requestPasswordRecovery(username).then(data => {
                this.setState(() => ({
                    recoveryStatus: data.success ? recoveryStatusEnum.SUCCEEDED : recoveryStatusEnum.USER_NOT_FOUND
                }));
            });
        } catch (err) {
            this.setState(() => ({recoveryStatus: recoveryStatusEnum.HAS_ERROR}));
        }
    }

    handleChange({target: {id, value}}) {
        this.setState(() => ({[id]: value}));
    }

    render() {
        const {recoveryStatus, username} = this.state;
        return (
            <Grid>
                <PageHeader title="Recuperar contraseña" icon={faChevronCircleRight}/>
                <FeedbackStatus recoveryStatus={recoveryStatus}/>
                <PasswordRecoveryForm
                    onChange={e => this.handleChange(e)}
                    onSubmit={e => this.handleSubmit(e)}
                    {...{recoveryStatus, username}}
                />
            </Grid>
        );
    }
}

export default PasswordRecovery;
