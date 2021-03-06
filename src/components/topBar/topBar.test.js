import { render, screen } from '@testing-library/react';
import TopBar from './TopBar';


describe('TopBar.js', () => {
  it('should render value from props', () => {
    const exampleTitle = 'Example title';

    render(<TopBar title={exampleTitle} />);
    const topBarElement = screen.getByTestId('topBar-content');

    expect(topBarElement).toHaveTextContent(exampleTitle);
  });

  it('should have correct css class', () => {
    const exampleTitle = 'Example title';

    render(<TopBar title={exampleTitle} />);
    const topBarElement = screen.getByTestId('topBar-content');

    expect(topBarElement).toHaveClass('topBar');
  });
});