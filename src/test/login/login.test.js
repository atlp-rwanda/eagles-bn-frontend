import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import renderWithProviders from '../redux-config';
import Login from '../../pages/auth/login/login';

describe('Login', () => {
  // eslint-disable-next-line no-undef
  test('Renders login component', () => {
    renderWithProviders(
      <Router>
        <Login />
      </Router>,
      { reduxState: { auth: {} } }
    );
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });
});
