import { render, screen } from '@testing-library/react';
import App from './DesignSystem';

test('renders App component', () => {
  render(<App />);
  const divElement = screen.getByText(/design system/i);
  expect(divElement).toBeInTheDocument();
});