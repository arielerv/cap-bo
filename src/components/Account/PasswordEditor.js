import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row} from 'react-bootstrap';
import {faKey} from '@fortawesome/free-solid-svg-icons';

import {PageHeader} from '../common';

class PasswordEditor extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className="title-container">
                    <PageHeader title="Password" icon={faKey}/>
                </Row>
            </Grid>
        );
    }
}

export default PasswordEditor;
