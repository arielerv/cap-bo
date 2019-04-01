/* global VERSION */
import React from 'react';
import {
    Grid, Row, Col, Image
} from 'react-bootstrap';
import logo from '../../images/logo-footer.png';

const Footer = () => (
    <footer className="hidden-print">
        <Grid fluid>
            <Row>
                <Col sm={4} xsHidden>
                    <div className="texts">
                        CAP
                    </div>
                    <div className="version">
                        Version&nbsp;
                        {VERSION}
                    </div>
                </Col>
                <Col sm={4} className="text-center">
                    <a
                        href="https://jira.indec.gob.ar/servicedesk/customer/portal/21/create/210"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <code>
                            Mesa de ayuda
                        </code>
                    </a>
                    <br/>
                    Teléfonos únicamente de Lunes a Viernes 5031-4630
                </Col>
                <Col sm={4} xsHidden className="text-right">
                    <Image src={logo}/>
                </Col>
            </Row>
        </Grid>
    </footer>
);

export default Footer;
