import React from 'react';
import { screen } from '@testing-library/react';
import RoleSettings from '../../pages/roles/users_fetching'
import renderWithProviders from '../redux-config';


describe('Requests', () => {
  // eslint-disable-next-line no-undef
  test('Renders requests component', () => {
    renderWithProviders(<RoleSettings />, { reduxState: { user: { user: { role: 'super_admin' } } } });
    expect(screen.getByText(/Users/)).toBeInTheDocument();
  });
});
