import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('APP TEST', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // expect(input).toMatchSnapshot();
  });
  test('render after useEffetct', async () => {
    render(<App />);
    screen.debug();
    const dataText = await screen.findByText(/data/i);
    expect(dataText).toBeInTheDocument();
    expect(dataText).toHaveStyle({ color: 'red' });
    screen.debug();
  });
  test('Click Event', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });
  test('Input event', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    fireEvent.input(input, { target: { value: '123' } });
    expect(screen.queryByTestId('value-elem')).toContainHTML('123');
  });
});
