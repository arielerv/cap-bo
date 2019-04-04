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
        <br/>
        <br/>
        <Row>
            <Col sm={12}>
                <FontAwesomeIcon icon={faChevronCircleRight}/>
                &nbsp;
                <a
                    href="https://jira.indec.gob.ar/servicedesk/customer/portal/21/create/210"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link"
                >
                    <code>
                        Mesa de ayuda
                    </code>
                </a>
                &nbsp;
                Teléfonos únicamente de Lunes a Viernes 5031-4630
            </Col>
        </Row>
    </Grid>
);

export default Home;
