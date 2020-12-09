import { connect } from 'react-redux';
import React,{ Component } from 'react';
import {roleSetting} from '../../store/actions/role_setting'
import Loader from '../../components/loading/loading'
import { Link, Redirect } from 'react-router-dom';

class RoleChanging extends Component{
    constructor(props) {
        super(props)
     
    }


    componentWillMount() {
        const {setUserRole} = this.props;;
        setUserRole(this.props.userId, this.props.userRole);   
       
    }

    render(){
        const {users, errors, pending} = this.props; 
        if (users) return (
        <div>
            <div className='role_changing_message'><h3>{users.message}</h3>
            <h4 id='reload'><b>Reload the page to get back to Users'list</b></h4>
            <Redirect to="/roles" />
            </div>
            </div>)
        return(
            <div>
                {pending ? <Loader/> : ''}
                {errors ?<span className='users-list-error'><h5>{errors}</h5></span>:''} 
                </div>
        )
    }
}

const mapUserToComponents =(dispatch)=> {
    return{
        setUserRole:(id, role)=>{
            return dispatch(roleSetting(id,role))
        }
    }
 
 }
const mapRoleToUser = ({role}) => ({
    users:role.user,
    errors:role.error,
    pending: role.pending
  })
  export default connect(
    mapRoleToUser,
     mapUserToComponents 
  )(RoleChanging);