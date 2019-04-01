/* global window */
import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faShieldAlt, faPowerOff} from '@fortawesome/free-solid-svg-icons';

import TokenService from '../../services/token';

const signOut = () => {
    TokenService.clear();
    window.location = '/signIn.html';
};

const Header = ({history}) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <NavItem eventKey={1} href="/">
                    <FontAwesomeIcon icon={faShieldAlt} size="2x"/>
                </NavItem>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} onClick={() => history.push('/users')}>
                    <FontAwesomeIcon icon={faUsers}/>
                    &nbsp;Usuarios
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={5} onClick={() => signOut()}>
                    <div className="hrm-link">
                        <FontAwesomeIcon icon={faPowerOff}/>
                        &nbsp;Cerrar sesión
                    </div>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default withRouter(Header);
