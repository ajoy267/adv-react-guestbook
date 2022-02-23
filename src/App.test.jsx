import { render, screen } from '@testing-library/react';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

test('should render login page', () => {
  const container = render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const header = screen.getByRole('heading', { name: /sign in/i });
  const username = screen.getByRole('textbox', { name: /username:/i });
  const password = screen.getByLabelText(/password/i);
  const signInBtn = screen.getByLabelText(/password/i);

  expect(header).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(signInBtn).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
