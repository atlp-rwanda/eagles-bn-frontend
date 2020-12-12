import React from 'react';
import { screen } from '@testing-library/react';
import Requests from '../../pages/requests/requests';
import renderWithProviders from '../redux-config';

describe('Requests', () => {
  // eslint-disable-next-line no-undef
  test('Renders requests component', () => {
    renderWithProviders(<Requests />, { reduxState: { user: { user: { role: 'manager' } } } });
    expect(screen.getByText(/Trip Requests/)).toBeInTheDocument();
  });
});
