/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Badge from '../../components/badge/badge';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export  class RequestsTable extends Component {
  constructor() {
    super();
    this.state = {
      status: "",
      tripId:'',
      submitted:false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    e.preventDefault();
    this.setState({status:e.target.value, tripId:e.target.id,openModal:true});
  }
  handleSubmit (e){
    e.preventDefault()
    const {status, tripId}= this.state
    const trip = {status}
    this.props.updateTripStatus(trip,tripId)
    this.setState({submitted:true})
      
  }
  componentDidUpdate(prevPros, prevState){
    const updatedRequest = prevPros.requests.find(request=>request.id===Number(this.state.tripId))
    if(this.state.status!="" &&this.state.status!=updatedRequest.status){
      // if(this.state.tripId!="" && !this.state.submitted){
      //  this.handleSubmit()
      // }
    }
    
  }

  getColumns() {
    const { user } = this.props;
    return [
      {
        name: 'Requester name',
        cell: (row) => `${row.requester.first_name} ${row.requester.last_name}`,
        sortable: true,
        omit: user.role === 'requester',
        grow: true,
      },
      {
        name: 'Requester email',
        selector: 'requester.email',
        omit: user.role === 'requester',
      },
      {
        name: 'Departure name',
        selector: 'departure.name',
        sortable: true,
      },
      {
        name: 'Trip type',
        cell: (row) => <span className="capitalize">{row.trip_type}</span>,
        sortable: true,
        grow: true,
      },
      {
        name: 'Accommodation',
        cell: (row) => (row.Accommodation ? row.Accommodation.name : 'Not available'),
        sortable: true,
        omit: user.role === 'manager',
      }, {
        name: 'Reason',
        selector: 'reasons',
        sortable: true,
        omit: user.role === 'manager',
        hide: 'md',
      },
      {
        name: 'Departure date',
        cell: (row) => new Date(row.departure_date).toDateString(),
        sortable: true,
        hide: 'sm',
      },
      {
        name: 'Return date',
        cell: (row) => new Date(row.return_date).toDateString(),
        sortable: true,
        hide: 'sm',
      },
      {
        name: 'Status',
        cell: (row) => (
          <Badge
            type={(row.status).toLowerCase() === 'approved' ? 'success'
              : ((row.status).toLowerCase() === 'rejected' ? 'danger' : 'primary')}
          >
            {row.status}
          </Badge>
        ),
        sortable: true,
        grow: true,
      },
      {
        name: 'Actions',
        cell: (row) => this.props.user.role==='manager'? 
        <Popup trigger={<button className="btn btn-primary btn-xs" >Edit status</button> } modal open   closeOnEscape>
        {close => (
          <div>
              <h1 className={this.props.tripStatusMessage?'text-success' : 'text-invalid'}>{this.props.tripStatusMessage || this.props.tripStatusError}</h1>
            {/* {this.props.tripStatusMessage? setInterval(() => {
             window.location.replace('/dashboard')
            }, 3000):null} */}
            <a className="close" onClick={close} >
              &times;
            </a>
            <form className="form-group" onSubmit={this.handleSubmit}>
            <select className="form-control" onChange={this.handleChange} value={!this.state.status?row.status:this.state.status} id={row.id} >
        <option  value="rejected" >Reject</option>
         <option  value="approved">Approve</option>
         </select>
         <button type="submit" className={!this.props.isLoading ? 'btn btn-primary' : 'btn btn-primary btn-loading'} data-testid="Register">{this.props.isLoading ? 'Changing...' : 'Change'}</button>
            </form>
          </div>
        )}
      </Popup>
        
    :(<a href="#" className="btn btn-primary btn-xs">Edit</a>),
           hide: 'sm',
      },
    ];
  }

  render() {
    const { requests, location } = this.props;
    let filteredRequests = requests;
    if (location.search && location.search.includes('id=')) {
      const id = location.search.split('id=')[1];
      filteredRequests = requests.filter((req) => req.id === Number(id));
    }
    return (
      <div className="requests-table-container">
        <DataTable
          columns={this.getColumns()}
          pagination
          responsive
          data={filteredRequests}
        />
      </div>
    );
  }
}

export default withRouter(RequestsTable);
