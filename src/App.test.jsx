import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';

test('renders learn react link', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );

  const nameInput = screen.getByRole('textbox', { name: /Guest Name:/i });
  const personName = 'Andrew';
  userEvent.type(nameInput, personName);

  const entryInput = screen.getByRole('textbox', { name: /Guest Entry:/i });
  const personEntry = 'Hello';
  userEvent.type(entryInput, personEntry);

  const signBtn = screen.getByRole('button', { name: /sign/i });
  userEvent.click(signBtn);

  const person = screen.getByText(/andrew:/i);
  const entry = screen.getByText(/hello/i);

  expect(person).toBeInTheDocument();
  expect(entry).toBeInTheDocument();
});
