import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Navbar = () => (
  <div>
    <h1>links</h1>
  </div>
);

describe('Navbar', () => {
  test('render React component', () => {
    render(<Navbar />);
    expect(screen.getByText('links')).toBeInTheDocument();
  });
});
