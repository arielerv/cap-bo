import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {IconButton, IconLinkButton, LoadingButton} from '@indec/react-commons';
import {faArrowLeft, faPaperPlane, faTimes} from '@fortawesome/free-solid-svg-icons';

import {resetStatusEnum} from '../../../model';

const NavigationButtons = ({resetStatus}) => {
    switch (resetStatus) {
        case resetStatusEnum.VALID_TOKEN:
            return (
                <Fragment>
                    <IconLinkButton to="/" icon={faTimes}>
                        Cancelar
                    </IconLinkButton>
                    &nbsp;&nbsp;
                    <IconButton icon={faPaperPlane} type="submit" bsStyle="primary">
                        Enviar
                    </IconButton>
                </Fragment>
            );
        case resetStatusEnum.SUCCEEDED:
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
    resetStatus: PropTypes.string
};

NavigationButtons.defaultProps = {
    resetStatus: null
};

export default NavigationButtons;
