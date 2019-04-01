import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

const Home = () => (
    <Grid fluid>
        <Row>
            <Col sm={12}>
                <h3>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                    Bienvenido a CAP
                </h3>
            </Col>
        </Row>
    </Grid>
);

export default Home;
