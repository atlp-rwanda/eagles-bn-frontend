import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../../store/actions/users_fetching';
import {LoadingSpinner} from './SomeLoadingSpinner';
import Loader from '../../components/loading/loading'
import UsersList from './UserRendering';

class RoleSettings extends Component {
    
    constructor(props) {
        super(props);
        this.token =localStorage.getItem('token')

    }

    componentWillMount() {
        const {getListOfUsers} = this.props;
        getListOfUsers();
       
    }

    // componentDidMount() {
    //     this.props.getListOfUsers();
    //   }
    render() {
        const {users, errors, pending} = this.props;
        

        return (
            <div className='product-list-wrapper'>
                {pending ? <Loader/> : ''}
                {errors ?<span className='users-list-error'><h5>{errors}</h5></span>:''}
                <UsersList users={users}/>   
            </div>
        )
    }
}

const mapActionsToComponents =(dispatch)=> {
    return{
        getListOfUsers:()=>{
            return dispatch(fetchUsers())
        }
    }

} 

const mapRolesToUsersList = ({roles}) => (
    {
   users:roles.users,
   errors:roles.errorFetchingUsers,
   pending: roles.pending,
})

export default connect(
    mapRolesToUsersList,
    mapActionsToComponents
)(RoleSettings);
