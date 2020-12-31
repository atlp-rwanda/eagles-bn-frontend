import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import Badge from '../../components/badge/badge';
export default class RequestsTable extends Component {
  constructor() {
    super();
    this.state = {
      status: "rejected",
      tripId:'',
      submitted:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    e.preventDefault();
    this.setState({status:e.target.value, tripId:e.target.id});
  }
  handleSubmit (){
    const {status, tripId}= this.state
    const trip = {status}
    this.props.updateTripStatus(trip,tripId)
    this.setState({submitted:true})
      window.location.reload()
  }
  componentDidUpdate(prevPros, prevState){
    const updatedRequest = prevPros.requests.find(request=>request.id===Number(this.state.tripId))
    if(this.state.status!="" &&this.state.status!=updatedRequest.status){
      if(this.state.tripId!="" && !this.state.submitted){
       this.handleSubmit()
      }
    }
    
  }
  getColumns() {
    return [
      {
        name: 'Requester name',
        cell: (row) => `${row.requester.first_name} ${row.requester.last_name}`,
        sortable: true,
        omit: this.props.user.role === 'requester',
        grow: true,
      },
      {
        name: 'Requester email',
        selector: 'requester.email',
        omit: this.props.user.role === 'requester',
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
        omit: this.props.user.role === 'manager',
      }, {
        name: 'Reason',
        selector: 'reasons',
        sortable: true,
        omit: this.props.user.role === 'manager',
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
        <select className="form-control" onChange={this.handleChange} value={this.state.status} id={row.id}>
        <option  value="rejected">reject</option>
        <option  value="approved">approve</option>
        </select>
    :(<a href="#" className="btn btn-primary btn-xs">Edit</a>),
           hide: 'sm',
      },
    ];
  }

  render() {
    return (
      <div className="requests-table-container">
        <DataTable
          columns={this.getColumns()}
          pagination
          responsive
          data={this.props.requests}
        />
      </div>
    );
  }
}
