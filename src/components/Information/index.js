import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import {faInfo} from '@fortawesome/free-solid-svg-icons';

import {PageHeader} from '../common';

const Information = () => (
    <Grid fluid>
        <Row className="title-container">
            <PageHeader title="Información" icon={faInfo}/>
        </Row>
    </Grid>
);

export default Information;
