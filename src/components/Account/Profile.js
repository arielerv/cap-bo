import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import {PageHeader} from '../common';
import QueryStringService from '../../services/queryString';
import {requestUser, requestSaveUser, setUser} from '../../actions/users';
import {requestDepartments} from '../../actions/states';
import {User} from '../../model';
import GeneralEditor from './GeneralEditor';
import AccountEditor from './AccountEditor';

class Profile extends PureComponent {
    static propTypes = {
        requestUser: PropTypes.func.isRequired,
        requestDepartments: PropTypes.func.isRequired,
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
        departments: PropTypes.arrayOf(PropTypes.shape({})),
        states: PropTypes.arrayOf(PropTypes.shape({}))
    };

    static defaultProps = {
        saving: false,
        user: new User(),
        departments: [],
        states: []
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.requestSaveUser(this.props.user);
        this.props.history.push('/users');
    }

    handleStateChange(e) {
        this.props.requestDepartments(e.target.value);
        this.handleChange(e);
    }

    render() {
        const {
            user, saving, states, departments
        } = this.props;
        return (
            <Grid fluid>
                <Row className="title-container">
                    <PageHeader title="Mi perfíl" icon={faUser}/>
                </Row>
                <GeneralEditor
                    {...{
                        user, saving, states, departments
                    }}
                    onChangeRole={rol => this.handleChangeRole(rol)}
                    onChange={e => this.handleChange(e)}
                    onSubmit={e => this.handleSubmit(e)}
                    onChangeState={e => this.handleStateChange(e)}
                />
                <AccountEditor
                    user={user}
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
        roles: state.staticData.roles,
        states: state.staticData.states,
        departments: state.state.departments
    }),
    dispatch => ({
        requestUser: id => dispatch(requestUser(id)),
        requestSaveUser: user => dispatch(requestSaveUser(user)),
        setUser: user => dispatch(setUser(user)),
        requestDepartments: state => dispatch(requestDepartments(state))
    })
)(Profile);
