import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import {faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ExpandButton = ({onChange, expanded}) => (
    <Row className="side-nav-expanded" onClick={onChange}>
        {expanded && (
            <Row>
                <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x"/>
                <code className="sidenav-text">Contraer barra</code>
            </Row>
        )}
        {!expanded && (
            <FontAwesomeIcon icon={faAngleDoubleRight} size="2x"/>
        )}
    </Row>
);

ExpandButton.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ExpandButton;
