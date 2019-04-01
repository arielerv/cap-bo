import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Row, Form, FormControl, FormGroup
} from 'react-bootstrap';

import {resetStatusEnum} from '../../../model';
import NavigationButtons from './NavigationButtons';

class ResetPasswordForm extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        user: PropTypes.shape({}),
        resetStatus: PropTypes.string,
        password: PropTypes.string
    };

    static defaultProps = {
        user: null,
        resetStatus: '',
        password: null
    };

    render() {
        const {
            onSubmit, user, onChange, resetStatus, password
        } = this.props;

        return (
            <Form onSubmit={onSubmit}>
                <Row>
                    <p>{user.email}</p>
                </Row>
                {resetStatus === resetStatusEnum.VALID_TOKEN && (
                    <FormGroup controlId="password">
                        <FormControl
                            type="password"
                            placeholder="Password"
                            required
                            onChange={e => onChange(e)}
                            value={password}
                        />
                    </FormGroup>
                )}
                &nbsp;&nbsp;
                <NavigationButtons resetStatus={resetStatus}/>
            </Form>
        );
    }
}

export default ResetPasswordForm;
