import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import Home from './Home';

test('should render header and guest form', () => {
  render(
    <UserProvider>
      <Home />
    </UserProvider>
  );

  const header = screen.getByText(/sign in friend/i);
  const darkMode = screen.getByRole('button', { name: /dark mode/i });
  const instructions = screen.getByText(/please sign the guest book/i);
  const nameInput = screen.getByText(/guest name:/i);
  const entryInput = screen.getByText(/guest entry:/i);
  const signBtn = screen.getByRole('button', { name: /sign/i });

  expect(header).toBeInTheDocument();
  expect(darkMode).toBeInTheDocument();
  expect(instructions).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(entryInput).toBeInTheDocument();
  expect(signBtn).toBeInTheDocument();
});
