import React from 'react';
import PropTypes from 'prop-types';
import {Alert, Col, Row} from 'react-bootstrap';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {childrenPropTypes, fontAwesomeIconPropTypes} from '../../util';
import Icon from './Icon';

const MessageIndicator = ({
    label, icon, pullIconRight, children, ...props
}) => (
    <Row className="text-center">
        <Col sm={6} smOffset={3}>
            <Alert>
                <Icon {...{
                    pullIconRight, icon, children, ...props
                }}
                />
                &nbsp;
                {label}
            </Alert>
        </Col>
    </Row>
);

MessageIndicator.propTypes = {
    label: PropTypes.string,
    icon: fontAwesomeIconPropTypes,
    pullIconRight: PropTypes.bool,
    children: childrenPropTypes
};

MessageIndicator.defaultProps = {
    label: 'Cargando...',
    icon: faSpinner,
    children: undefined,
    pullIconRight: false
};

export default MessageIndicator;
