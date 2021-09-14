import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button initial color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorButton.textContent).toBe('Change to red')
})
test('intial State of CheckBox', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { hidden: true })
  expect(checkBox).not.toBeChecked();
})

test('checkbox state', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { hidden: true });
  const button = screen.getByRole('button');

  fireEvent.click(checkBox);
  expect(button).toBeDisabled;

  fireEvent.click(checkBox);
  expect(button).toBeEnabled;
});