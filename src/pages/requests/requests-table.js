import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import Badge from '../../components/badge/badge';

export default class RequestsTable extends Component {
  constructor() {
    super();
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
        cell: (row) => (<a href="#" className="btn btn-primary btn-xs">Edit</a>),
        sortable: false,
        grow: true,
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
