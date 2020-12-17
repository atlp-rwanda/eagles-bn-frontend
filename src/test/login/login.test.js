import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProviders from '../redux-config';
import Login from '../../pages/auth/login/login';

describe('Login', () => {
  // eslint-disable-next-line no-undef
  test('Renders login component', () => {
    renderWithProviders(<Login />, { reduxState: { auth: {} } });
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });
});
