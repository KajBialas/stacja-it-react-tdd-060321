import Button from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

const buttonText = 'button';
const mockHandleClick = jest.fn();

describe('Button.js', () => {
  it('should display text from props', () => {
    render(<Button text={buttonText} handleClick={() => {}} />);
    const buttonElement = screen.getByTestId('button');

    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it('should call handle click after click', () => {
    render(<Button text={buttonText} handleClick={mockHandleClick} />);
    const buttonElement = screen.getByTestId('button');

    fireEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalled();
  });
});