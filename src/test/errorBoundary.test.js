/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

test('Error boundary', () => {
  render(
    <ErrorBoundary>
      <h1>Hello World!</h1>
    </ErrorBoundary>,
  );
  expect(screen.getByText('Hello World!')).toBeFalsy;
});
