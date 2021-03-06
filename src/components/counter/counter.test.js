import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter.js', () => {
  it('should display init value of counter', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');

    expect(valueElement).toHaveTextContent('0');
  });

  it('should display correct value after click increment button', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    const buttonElement = screen.getByTestId('counter-button-increment');

    fireEvent.click(buttonElement);

    expect(valueElement).toHaveTextContent('1');
  });

  it('should display correct value after click decrement button', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    const buttonElement = screen.getByTestId('counter-button-decrement');

    fireEvent.click(buttonElement);
    expect(valueElement.textContent).toBe('-1');
  });

  it('should display correct value after click reset button', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    const buttonElementIncrement = screen.getByTestId('counter-button-increment');
    const buttonElementReset = screen.getByTestId('counter-button-reset');

    fireEvent.click(buttonElementIncrement);
    fireEvent.click(buttonElementReset);

    expect(valueElement).toHaveTextContent('0');
  });
});