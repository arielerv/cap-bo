import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import {PageHeader} from '../../common';
import QueryStringService from '../../../services/queryString';
import {requestUser, requestSaveUser, setUser} from '../../../actions/users';
import {User, typePasswordOptions} from '../../../model';
import UserForm from './UserForm';

class UserEditor extends PureComponent {
    static propTypes = {
        requestUser: PropTypes.func.isRequired,
        requestSaveUser: PropTypes.func.isRequired,
        setUser: PropTypes.func.isRequired,
        location: PropTypes.shape({
            search: PropTypes.string
        }).isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        saving: PropTypes.bool,
        user: PropTypes.shape({}),
        roles: PropTypes.arrayOf(PropTypes.shape({}))
    };

    static defaultProps = {
        saving: false,
        user: new User({typePassword: 0}),
        roles: []
    };

    componentDidMount() {
        const {search} = this.props.location;
        this.props.setUser(new User());
        if (search) {
            const {id} = QueryStringService.parse(search);
            this.props.requestUser(id);
        }
    }

    handleChange({target: {id, value}}) {
        this.props.setUser({...this.props.user, [id]: value});
    }

    handleChangeRole(roles) {
        this.props.setUser({...this.props.user, roles});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.requestSaveUser(this.props.user);
        this.props.history.push('/users');
    }

    render() {
        const {user, saving, roles} = this.props;
        return (
            <Grid>
                <PageHeader title={user._id ? 'Edición' : 'Nuevo'} icon={faUser} path="/users"/>
                <UserForm
                    {...{
                        user, saving, roles, typePasswordOptions
                    }}
                    onChangeRole={rol => this.handleChangeRole(rol)}
                    onChange={e => this.handleChange(e)}
                    onSubmit={e => this.handleSubmit(e)}
                />
            </Grid>
        );
    }
}

export default connect(
    state => ({
        user: state.user.user,
        saving: state.user.saving,
        roles: state.staticData.roles
    }),
    dispatch => ({
        requestUser: id => dispatch(requestUser(id)),
        requestSaveUser: user => dispatch(requestSaveUser(user)),
        setUser: user => dispatch(setUser(user))
    })
)(UserEditor);
