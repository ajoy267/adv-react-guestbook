import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  const signInBtn = screen.getByRole('button', { name: /sign in/i });

  expect(header).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(signInBtn).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test('user clicks through login page to sign in', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const usernameInput = screen.getByRole('textbox', { name: /username:/i });
  const username = 'example';
  userEvent.type(usernameInput, username);

  const passwordInput = screen.getByLabelText(/password/i);
  const password = 'A12345';
  userEvent.type(passwordInput, password);

  const signInBtn = screen.getByRole('button', { name: /sign in/i });
  userEvent.click(signInBtn);

  const heading = screen.getByText(/signing guest book as example/i);
  const lightmode = screen.getByRole('button', { name: /☀/i });
  const darkmode = screen.getByRole('button', { name: /☀/i });
  const entryInput = screen.getByRole('textbox', { name: /guest entry:/i });
  const signBtn = screen.getByRole('textbox', { name: /guest entry:/i });
  const logoutBtn = screen.getByRole('textbox', { name: /guest entry:/i });

  expect(heading).toBeInTheDocument();
  expect(lightmode).toBeInTheDocument();
  expect(darkmode).toBeInTheDocument();
  expect(entryInput).toBeInTheDocument();
  expect(signBtn).toBeInTheDocument();
  expect(logoutBtn).toBeInTheDocument();
});

test('user can submit an entry once signed in', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const usernameInput = screen.getByRole('textbox', { name: /username:/i });
  const username = 'example';
  userEvent.type(usernameInput, username);

  const passwordInput = screen.getByLabelText(/password/i);
  const password = 'A12345';
  userEvent.type(passwordInput, password);

  const signInBtn = screen.getByRole('button', { name: /sign in/i });
  userEvent.click(signInBtn);

  const entryInput = screen.getByRole('textbox', { name: /guest entry:/i });
  const entry = 'Hello';
  userEvent.type(entryInput, entry);

  const signBtn = screen.getByRole('button', { name: /sign/i });
  userEvent.click(signBtn);

  const user = screen.getByText(/example:/i);
  const userMessage = screen.getByText(/hello/i);

  expect(user).toBeInTheDocument();
  expect(userMessage).toBeInTheDocument();
});

test('user can logout after they are signed in', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const usernameInput = screen.getByRole('textbox', { name: /username:/i });
  const username = 'example';
  userEvent.type(usernameInput, username);

  const passwordInput = screen.getByLabelText(/password/i);
  const password = 'A12345';
  userEvent.type(passwordInput, password);

  const signInBtn = screen.getByRole('button', { name: /sign in/i });
  userEvent.click(signInBtn);

  const signOut = screen.getByRole('button', { name: /not example\?/i });
  userEvent.click(signOut);

  const header = screen.getByRole('heading', { name: /sign in/i });
  const nameInput = screen.getByRole('textbox', { name: /username:/i });
  const passInput = screen.getByLabelText(/password/i);
  const signInButton = screen.getByRole('button', { name: /sign in/i });

  expect(header).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(passInput).toBeInTheDocument();
  expect(signInButton).toBeInTheDocument();
});
