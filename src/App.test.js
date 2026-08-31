// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainCode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainCode/i);
    expect(titleElement).toBeInTheDocument();
});
