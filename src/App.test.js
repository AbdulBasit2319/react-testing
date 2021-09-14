import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSoace } from './App';

test('button initial color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
})
test('intial State of CheckBox', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { hidden: true })
  expect(checkBox).not.toBeChecked();
})

test('checkbox state', () => {
  render(<App />)
  const checkBox = screen.getByRole('checkbox', { hidden: true });
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(checkBox);
  expect(button).toBeDisabled;
  // expect(button).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkBox);
  expect(button).toBeEnabled;
});

test('checkBox disable trun to grey and revert to red', () => {
  render(<App />)

  const checkBox = screen.getByRole('checkbox', { hidden: true });
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(checkBox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkBox)
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

})


test('checkBox disable trun to grey and revert to blue', () => {
  render(<App />)

  const checkBox = screen.getByRole('checkbox', { hidden: true });
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(button)

  fireEvent.click(checkBox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkBox)
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })

})

describe('case for differnt camel cases', () => {
  test('When there is no inner Capital letter', () => {
    render(<App />)
    expect(replaceCamelWithSoace('Red')).toBe('Red');
  });
  test('When there is one inner Capital Letter', () => {
    expect(replaceCamelWithSoace('LightBlue')).toBe('Light Blue');

  });
  test('When there is many inner Capital Letter', () => {
    expect(replaceCamelWithSoace('DarkLightBlue')).toBe('Dark Light Blue');

  });
})