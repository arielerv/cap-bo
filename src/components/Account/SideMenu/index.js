import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faKey} from '@fortawesome/free-solid-svg-icons';

import ExpandButton from './ExpandButton';
import ClickOutside from './ClickOutside';

class SideMenu extends PureComponent {
    propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    handleChange() {
        this.setState(state => ({expanded: !state.expanded}));
    }

    render() {
        const {expanded} = this.state;
        const {history} = this.props;
        return (
            <ClickOutside onClickOutside={() => this.setState(() => ({expanded: false}))}>
                <SideNav expanded={expanded}>
                    <br/>
                    <br/>
                    <SideNav.Nav defaultSelected="profile">
                        <NavItem eventKey="profile" onClick={() => history.push('/account/profile')}>
                            <NavIcon>
                                <FontAwesomeIcon icon={faAddressCard} size="2x"/>
                            </NavIcon>
                            <NavText>
                                Mi perfil
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="password" onClick={() => history.push('/account/password')}>
                            <NavIcon>
                                <FontAwesomeIcon icon={faKey} size="2x"/>
                            </NavIcon>
                            <NavText>
                                Contraseña
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                    <ExpandButton expanded={expanded} onChange={() => this.handleChange()}/>
                </SideNav>
            </ClickOutside>
        );
    }
}

export default SideMenu;
