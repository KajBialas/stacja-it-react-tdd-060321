import { render, screen, act } from '@testing-library/react';
import TodosList from './Todos';

const mockResponse = [{
  id: 1,
  title: 'example title 1',
}];


describe('TodosList.js', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    })
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should display loader', async () => {
    render(<TodosList />);
    const loaderElement = screen.getByTestId('todosLoader');
    expect(loaderElement).toBeTruthy()
  });

  it('should display example data from api', async () => {
    await act(async () => {
      render(<TodosList/>);
    });
    const todosListNames = screen.getAllByTestId('todoListElement').map(div => div.textContent);
    const expectedResult = mockResponse.map(element => element.title);

    expect(todosListNames).toEqual(expectedResult);
  })
})