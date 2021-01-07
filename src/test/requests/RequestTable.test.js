/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../redux-config';
import RequestsTable from '../../pages/requests/requests-table';

test('Render all requests', () => {
  const props = {
    user: { role: 'manager' },
    requests: [{
      id: 1,
      trip_type: 'One Way',
      reasons: 'none',
      departure_date: '2020-03-01',
      return_date: '2020-03-01',
      status: 'approved',
      departure: { name: 'none' },
      requester: {
        first_name: 'John',
        last_name: 'Doe',
      },
    }],
  };
  renderWithProviders(
    <MemoryRouter>
      <RequestsTable {...props} />
    </MemoryRouter>,
  );
  expect(screen.getByText('One Way')).toBeInTheDocument;
});

test('Render a single request', () => {
  const props = {
    location: { search: '?id=1' },
    user: { role: 'manager' },
    requests: [{
      id: 1,
      trip_type: 'One Way',
      reasons: 'none',
      departure_date: '2020-03-01',
      return_date: '2020-03-01',
      status: 'approved',
      departure: { name: 'none' },
      requester: {
        first_name: 'John',
        last_name: 'Doe',
      },
    }],
  };
  renderWithProviders(
    <MemoryRouter>
      <RequestsTable {...props} />
    </MemoryRouter>,
  );
  expect(screen.getByText('One Way')).toBeInTheDocument;
});

test('Render no requests', () => {
  const props = {
    location: { search: '?id=1' },
    user: { role: 'manager' },
    requests: [],
  };
  renderWithProviders(
    <MemoryRouter>
      <RequestsTable {...props} />
    </MemoryRouter>,
  );
  expect(screen.getByText('There are no records to display')).toBeInTheDocument;
});
