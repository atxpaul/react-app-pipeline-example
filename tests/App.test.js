import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the logo', () => {
    render(<App />);
    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
});

test('renders the fetch button', () => {
    render(<App />);
    const fetchButton = screen.getByText(/fetch products/i);
    expect(fetchButton).toBeInTheDocument();
});

test('renders the clear button', () => {
    render(<App />);
    const clearButton = screen.getByText(/clear/i);
    expect(clearButton).toBeInTheDocument();
});
