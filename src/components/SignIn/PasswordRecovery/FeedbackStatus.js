import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';

import {recoveryStatusEnum} from '../../../model';

const FeedbackStatus = ({recoveryStatus}) => {
    switch (recoveryStatus) {
        case recoveryStatusEnum.SUCCEEDED:
            return (
                <Alert bsStyle="info">
                    <h4>
                        Se le ha enviado un e-mail con un enlace para recuperar su contraseña.
                    </h4>
                </Alert>
            );
        case recoveryStatusEnum.HAS_ERROR:
            return (
                <Alert bsStyle="danger">
                    <h4>
                        Ah ocurrido un error, vuelva a intertarlo más tarde.
                    </h4>
                </Alert>
            );
        case recoveryStatusEnum.USER_NOT_FOUND:
            return (
                <Alert bsStyle="warning">
                    <h4>
                        Usuario no registrado.
                    </h4>
                </Alert>
            );
        default:
            return null;
    }
};

FeedbackStatus.propTypes = {
    recoveryStatus: PropTypes.string
};

FeedbackStatus.defaultProps = {
    recoveryStatus: null
};

export default FeedbackStatus;
