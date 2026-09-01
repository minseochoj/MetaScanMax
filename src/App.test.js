// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaScanMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaScanMax/i);
    expect(titleElement).toBeInTheDocument();
});
