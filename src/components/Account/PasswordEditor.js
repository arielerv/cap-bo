import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import {faKey} from '@fortawesome/free-solid-svg-icons';

import {PageHeader} from '../common';

const PasswordEditor = () => (
    <Grid fluid>
        <Row className="title-container">
            <PageHeader title="Password" icon={faKey}/>
        </Row>
    </Grid>
);

export default PasswordEditor;
