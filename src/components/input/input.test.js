import Input from './Input';
import { render, screen, fireEvent } from '@testing-library/react';

const inputInitValue = 0;
const mockHandleSubmit = jest.fn();

describe('Input.js', () => {
  it('should display init value', () => {
    render(<Input initValue={inputInitValue} handleSubmit={mockHandleSubmit} />);
    const inputElement = screen.getByTestId('form-input');

    expect(inputElement.value).toBe('0');
  });

  it('should display changed value', () => {
    render(<Input initValue={inputInitValue} handleSubmit={mockHandleSubmit} />);
    const inputElement = screen.getByTestId('form-input');
    fireEvent.change(inputElement, { target: {value: '10'}});

    expect(inputElement.value).toBe('10');
  });

  it('should submit after click button', () => {
    render(<Input initValue={inputInitValue} handleSubmit={mockHandleSubmit} />);
    const inputElement = screen.getByTestId('form-input');
    const buttonElement = screen.getByTestId('form-button');

    fireEvent.change(inputElement, { target: {value: '10'}});
    fireEvent.click(buttonElement);

    expect(mockHandleSubmit).toHaveBeenCalledWith('10');
  });

  it('should submit after submit form', () => {
    render(<Input initValue={inputInitValue} handleSubmit={mockHandleSubmit} />);
    const inputElement = screen.getByTestId('form-input');
    const formElement = screen.getByTestId('form');

    fireEvent.change(inputElement, { target: {value: '10'}});
    fireEvent.submit(formElement);

    expect(mockHandleSubmit).toHaveBeenCalledWith('10');
  });
});