import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const DetailsLink = () => (
  <div>
    <h1>my details</h1>
  </div>
);

describe('Details Link', () => {
  test('render React component', () => {
    render(<DetailsLink />);
    expect(screen.getByText('my details')).toBeInTheDocument();
  });
});
