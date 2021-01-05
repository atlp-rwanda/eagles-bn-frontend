/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Badge from '../../components/badge/badge';

class RequestsTable extends Component {
  constructor() {
    super();
    this.state = {
      status: 'rejected',
      tripId: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevPros, prevState) {
  //   const { tripId, status, submitted } = this.state;
  //   const updatedRequest = prevPros.requests.find((req) => req.id === Number(tripId));
  //   if (status != '' && status != updatedRequest.status && tripId != '' && !submitted) this.handleSubmit();
  // }

  handleSubmit() {
    const { status, tripId } = this.state;
    const { updateTripStatus } = this.props;
    updateTripStatus({ status }, tripId);
    this.setState({ submitted: true });
    window.location.reload();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ status: e.target.value, tripId: e.target.id });
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
        // eslint-disable-next-line no-confusing-arrow
        cell: (row) => (user.role === 'manager') ?  (
          <select className="form-control" onChange={this.handleChange} value={this.state.status} id={row.id}>
            <option value="rejected">reject</option>
            <option value="approved">approve</option>
          </select>
        ) : (<a href="#" className="btn btn-primary btn-xs">Edit</a>),
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
