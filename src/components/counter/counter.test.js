import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import {useCounter } from '../../hooks/useCounter/useCounter';

const mockIncrement = jest.fn();




describe('Counter.js', () => {
  beforeEach(() => {
    jest.mock('../../hooks/useCounter/useCounter', () => ({
      count: 0,
      increment: mockIncrement,
    }));
  });

  it('should display counter value', () => {
    render(<Counter />);
    const counterValueElement = screen.getByTestId('counterValue');

    expect(counterValueElement).toHaveTextContent('0');
  });

  // it('should call counter increment', () => {
  //   render(<Counter />);
  //   const counterButtonElement = screen.getByTestId('counterButton');
  //   fireEvent.click(counterButtonElement);
  //
  //   expect(mockIncrement).toHaveBeenCalled();
  // });
});