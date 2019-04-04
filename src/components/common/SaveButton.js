import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import {noop} from 'lodash';

import {LoadingButton} from '@indec/react-commons';

const SaveButton = ({
    disabled, onClick, saving, textButton, ...props
}) => (
    saving ? <LoadingButton/> : (
        <Button
            type="submit"
            bsStyle="primary"
            className="ta-save"
            {...{disabled, onClick, props}}
        >
            <FontAwesomeIcon icon={faSave}/>
            &nbsp;{textButton}
        </Button>
    )
);

SaveButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    saving: PropTypes.bool,
    textButton: PropTypes.string
};

SaveButton.defaultProps = {
    disabled: false,
    onClick: noop,
    saving: false,
    textButton: 'Guardar'
};

export default SaveButton;
