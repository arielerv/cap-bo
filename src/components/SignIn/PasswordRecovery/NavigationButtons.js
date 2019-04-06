import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {faArrowLeft, faPaperPlane, faTimes} from '@fortawesome/free-solid-svg-icons';

import {IconButton, IconLinkButton, LoadingButton} from '../../common';
import {recoveryStatusEnum} from '../../../model';

const NavigationButtons = ({recoveryStatus}) => {
    switch (recoveryStatus) {
        case recoveryStatusEnum.READY:
            return (
                <Fragment>
                    <IconLinkButton to="/" icon={faArrowLeft}>
                        Volver
                    </IconLinkButton>
                    &nbsp;&nbsp;
                    <IconButton type="submit" bsStyle="primary" icon={faPaperPlane}>
                        Enviar
                    </IconButton>
                </Fragment>
            );
        case recoveryStatusEnum.USER_NOT_FOUND:
            return (
                <IconLinkButton to="/" icon={faTimes}>
                    Cancelar
                </IconLinkButton>
            );
        case recoveryStatusEnum.HAS_ERROR:
            return (
                <IconLinkButton to="/" icon={faTimes}>
                    Cancelar
                </IconLinkButton>
            );
        case recoveryStatusEnum.SUCCEEDED:
            return (
                <IconLinkButton to="/" icon={faArrowLeft}>
                    Volver
                </IconLinkButton>
            );
        default:
            return (
                <LoadingButton label="Procesando..."/>
            );
    }
};

NavigationButtons.propTypes = {
    recoveryStatus: PropTypes.string
};

NavigationButtons.defaultProps = {
    recoveryStatus: null
};

export default NavigationButtons;
