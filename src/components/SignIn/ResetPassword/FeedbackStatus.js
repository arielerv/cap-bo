import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

import {resetStatusEnum} from '../../../model';

const FeedbackStatus = ({resetStatus}) => {
    console.log(resetStatus);
    switch (resetStatus) {
        case resetStatusEnum.VALIDATING_TOKEN:
            return (
                <Alert bsStyle="info" className="text-center">
                    <h3>
                        <FontAwesomeIcon icon={faCog} spin/>
                        &nbsp;Validando el usuario...
                        &nbsp;
                        <FontAwesomeIcon icon={faCog} spin/>
                    </h3>
                </Alert>
            );
        case resetStatusEnum.TOKEN_EXPIRED:
            return (
                <Alert bsStyle="danger">
                    <h3>
                        El link ha caducado, vuelva a generar otro link.
                    </h3>
                </Alert>
            );
        case resetStatusEnum.INVALID_TOKEN:
            return (
                <Alert bsStyle="danger">
                    <h3>
                        El link proporcionado no es válido, vuelva a repetir el proceso.
                    </h3>
                </Alert>
            );
        case resetStatusEnum.SUCCEEDED:
            return (
                <Alert bsStyle="info">
                    <h3>
                        La contraseña ha sido actualizada con éxito.
                    </h3>
                </Alert>
            );
        case resetStatusEnum.HAS_ERROR:
            return (
                <Alert bsStyle="danger">
                    <h3>
                        Ha ocurrido un error, vuelva a repetir el proceso.
                    </h3>
                </Alert>
            );
        default:
            return null;
    }
};

FeedbackStatus.propTypes = {
    resetStatus: PropTypes.string
};

FeedbackStatus.defaultProps = {
    resetStatus: null
};

export default FeedbackStatus;
