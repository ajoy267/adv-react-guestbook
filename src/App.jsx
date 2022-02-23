import './App.css';
import { EntryProvider } from './context/EntryContext';
import Login from './views/Auth/Login';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <EntryProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </EntryProvider>
    </div>
  );
}

export default App;
