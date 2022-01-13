import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders basic empty template', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Loading parks/i);
  expect(linkElement).toBeInTheDocument();
});

