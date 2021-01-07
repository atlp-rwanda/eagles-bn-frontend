/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../../components/badge/badge';

test('Badge', () => {
  render(
    <Badge type="danger">
      <h1>Hello World!</h1>
    </Badge>,
  );
  expect(screen.getByText('Hello World!')).toBeInTheDocument;
});
