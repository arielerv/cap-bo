/* global window */
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    Nav, Navbar, NavItem, NavDropdown, MenuItem, Row
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUsers, faShieldAlt, faPowerOff, faUserCircle, faInfo, faUser
} from '@fortawesome/free-solid-svg-icons';

import {roleEnum} from '../../model';
import {Role} from '../common';
import TokenService from '../../services/token';

const signOut = () => {
    TokenService.clear();
    window.location = '/signIn.html';
};

const Header = ({history, user}) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand className="nav-header">
                <NavItem eventKey={1} href="/">
                    <FontAwesomeIcon icon={faShieldAlt} size="2x"/>
                </NavItem>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <Role roles={[roleEnum.ADMIN]}>
                    <NavItem eventKey={2} onClick={() => history.push('/users')}>
                        <FontAwesomeIcon icon={faUsers}/>
                        &nbsp;Usuarios
                    </NavItem>
                </Role>
            </Nav>
            <Nav pullRight>
                <NavDropdown title={<FontAwesomeIcon icon={faUserCircle} title="mi cuenta"/>} className="cap-icon">
                    <Row className="navbar-text nav-padding">
                        <strong className="color-white">{user && `${user.name} ${user.surname}`}</strong>
                    </Row>
                    <br/>
                    <hr className="hr-margin"/>
                    <MenuItem eventKey={3.1} onClick={() => history.push('/account')}>
                        <FontAwesomeIcon icon={faUser}/>
                        &nbsp;Mi cuenta
                    </MenuItem>
                    <MenuItem eventKey={3.2} onClick={() => history.push('/info')}>
                        <FontAwesomeIcon icon={faInfo}/>
                        &nbsp;Información
                    </MenuItem>
                    <MenuItem eventKey={3.3} onClick={() => signOut()}>
                        <FontAwesomeIcon icon={faPowerOff}/>
                        &nbsp;Cerrar sessión
                    </MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    user: PropTypes.shape({})
};

Header.defaultProps = {
    user: null
};

export default connect(
    state => ({user: state.session.user})
)(memo(withRouter(Header)));
