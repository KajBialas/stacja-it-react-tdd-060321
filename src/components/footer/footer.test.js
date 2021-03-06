import { render, screen} from '@testing-library/react';
import Footer from './Footer';

describe('Footer.js', () => {
  it('should render website title', ()=> {
    const exampleTitle = 'Example title';

    render(<Footer title={exampleTitle} />);
    const footerElementTitle = screen.getByTestId('footer-title');

    expect(footerElementTitle).toHaveTextContent(exampleTitle);
  });

  it('should render copy with current year', () => {
    const exampleTitle = 'Example title';

    render(<Footer title={exampleTitle} />);
    const footerElementCopy = screen.getByTestId('footer-copy');

    const dateYear = new Date().getFullYear();
    const expectedFooterElementCopy = `Copyright ${dateYear}`;

    expect(footerElementCopy).toHaveTextContent(expectedFooterElementCopy);
  });
});