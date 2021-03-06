import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter.js', () => {
  it('should display init value of counter', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');

    expect(valueElement).toHaveTextContent('0');
  });

  it('should display correct value after click', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    const buttonElement = screen.getByTestId('counter-button');

    fireEvent.click(buttonElement);

    expect(valueElement).toHaveTextContent('1');
  });
});