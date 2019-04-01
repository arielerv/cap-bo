import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Form, FormControl, FormGroup} from 'react-bootstrap';

import {recoveryStatusEnum} from '../../../model';
import NavigationButtons from './NavigationButtons';

class PasswordRecoveryForm extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        username: PropTypes.string,
        recoveryStatus: PropTypes.string
    };

    static defaultProps = {
        recoveryStatus: '',
        username: ''
    };

    render() {
        const {
            onSubmit, onChange, recoveryStatus, username
        } = this.props;
        return (
            <Form onSubmit={e => onSubmit(e)}>
                {recoveryStatus === recoveryStatusEnum.READY && (
                    <FormGroup controlId="username">
                        <FormControl
                            type="text"
                            placeholder="Usuario"
                            required
                            onChange={e => onChange(e)}
                            value={username}
                        />
                    </FormGroup>
                )}
                <NavigationButtons recoveryStatus={recoveryStatus}/>
            </Form>
        );
    }
}

export default PasswordRecoveryForm;
