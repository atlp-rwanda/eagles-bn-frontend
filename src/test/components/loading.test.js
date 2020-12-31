import React from 'react';
import Loading from '../../components/loading/loading';
import renderWithProviders from '../redux-config';

describe('Loading', () => {
  it('Renders loading component', () => {
    const { getByTestId } = renderWithProviders(<Loading />, {
      reduxState: { auth: {} },
    });
    const loader = getByTestId('loader');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveStyle('display: block');
  });
});
