import { connect } from 'react-redux';
import React,{ Component } from 'react';
import Select from 'react-select'
import "./ProductTableStyle.scss"
import RoleChanging from './role_changed'


export default class UsersList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userId:0,
      userRole:'',
      reset: false
    };
    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.handleSelectChange= this.handleSelectChange.bind(this)
    this.resetState=this.resetState.bind(this)
}
handleSelectChange(e,user) {
     var pop= document.getElementById('popupContainer');
     pop.innerHTML = "role changed!, reload for updated data!"
     pop.style.display="block"
      this.setState({
         userId:user.id,
         userRole:e.value,
         reset:true
        })

}
resetState(){
   this.setState({
      userId:0,
      userRole:''

     })
}

    renderTableData() {
      if(this.props.users)
      return this.props.users.map((user, index) => {
         const { id, first_name, last_name, email} = user 
         const options = [
            { value: 'admin', label: 'admin' },
            { value: 'requester', label: 'requester' },
            { value: 'manager', label: 'manager' },
            { value: 'super-admin', label: 'super-admin' }
          ]
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{first_name}</td>
               <td>{last_name}</td>
               <td>{email}</td>
               <td>
               <Select id={user.id} placeholder={user.role} options={options} value={user.role}
                onChange={(e) =>this.handleSelectChange(e,user)}/>
               </td>
            </tr>
         )
         
      })
   }
   renderTableHeader() {
    let header = ['id', 'first_name', 'last_name', 'email','role']
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
   render() {
      if(this.state.userRole!=''&& this.state.userId!=0) 
      return (<div>
         <RoleChanging userId={this.state.userId} userRole={this.state.userRole} tableReset={this.resetState}/>
         </div>)
      
         
      return (
         <div>
            <h1 id='title'>Users</h1>
            <button id='popupContainer'className="btn btn-info"></button>
            <table id='users'>
               <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table> 
         </div>
      )
   }
  }

 



  