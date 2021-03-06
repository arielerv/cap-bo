import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import IconLinkButton from './IconLinkButton';

const PageHeader = ({
    path, title, icon, backIcon, ...props
}) => (
    <Row className="form-group">
        {path && (
            <Col sm={1}>
                <br/>
                <IconLinkButton to={path} icon={backIcon} {...props}/>
            </Col>
        )}
        <Col sm={path ? 11 : 12}>
            <h2>
                {icon && (
                    <Fragment>
                        <FontAwesomeIcon icon={icon}/>
                        &nbsp;
                    </Fragment>
                )}
                {title}
            </h2>
        </Col>
    </Row>
);

PageHeader.propTypes = {
    path: PropTypes.string,
    backIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
    title: PropTypes.string.isRequired,
    icon: PropTypes.shape({})
};

PageHeader.defaultProps = {
    icon: null,
    backIcon: faArrowLeft,
    path: null
};

export default PageHeader;
