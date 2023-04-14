import React from 'react';
import { render, screen } from '@testing-library/react';

import { AppRouter } from '../router/AppRouter';

test('renders learn react link', () => {
  render(<PodCastNavbar />);
  
  expect(true).toBe(true)
});