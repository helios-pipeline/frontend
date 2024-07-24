import { expect, test } from 'vitest'
import { screen, render } from '@testing-library/react';
import App from '../src/App';
import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";


describe('App', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('contains SQL Dashboard link', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText('SQL Dashboard')).toBeInTheDocument();
  });

  it('contains Add Data Source link', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText('Add Data Source')).toBeInTheDocument();
  });
});








